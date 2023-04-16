import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { PassengerService } from '../../services/passenger.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketData } from 'src/app/data/TicketData';
import { FlightService } from 'src/app/services/flight.service';
import { ControlService } from 'src/app/services/control.service';
import { EmailService } from 'src/app/services/email.service';
import { EmailData } from 'src/app/data/EmailData';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  loadingCheckout = true
  checkoutSuccess = false

  canSendEmail = true
  emailRequestReceived = false
  succesfullySentEmail = false

  passengerInfo = this.passengerService.passenger
  selectedFlight = this.flightService.selectedFlight

  emailForm = this.formBuilder.group({
    email: ''
  })

  constructor(private passengerService: PassengerService, private ticketService: TicketService,
    private loginService: LoginService, private flightService: FlightService, private controlService: ControlService,
    private emailService: EmailService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.controlService.updateFormPosition(4)
    if (this.loginService.token !== '' && this.passengerInfo && this.selectedFlight) {
      this.passengerService.createPassenger(this.loginService.token, this.passengerInfo)
        .then(response => {
          console.log(response)
          let ticket = new TicketData(response.PassengerID, this.selectedFlight.FlightNumber)
          console.log(ticket)
          return this.ticketService.createTicket(this.loginService.token, ticket)
        })
        .then(
          response => {
            console.log(response)
            console.log("Passenger and ticket created succesfully")
            this.checkoutSuccess = true
          },
        )
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loadingCheckout = false)
    } else
      this.loadingCheckout = false
  }

  sendEmail() {
    let to = this.emailForm.value.email!
    if (!this.canSendEmail || !this.checkoutSuccess || to.length == 0 || !this.passengerInfo || !this.selectedFlight)
      return
    this.canSendEmail = false

    let subject = "Informações da passagem GOL"
    let body = (
      `Passagem partindo de ${this.selectedFlight.Departure} no dia ${this.selectedFlight.DepartureDate} ` +
      `chegando em ${this.selectedFlight.Arrival} no dia ${this.selectedFlight.ArrivalDate}. Dados passageiro: ` +
      `${this.passengerInfo.firstName} ${this.passengerInfo.lastName} nascido dia ${this.passengerInfo.birthDate}`)

    this.emailService.sendEmail(new EmailData(to, subject, body), this.loginService.token).
      then(sentEmail => {
        if (sentEmail)
          this.succesfullySentEmail = true
        else
          this.succesfullySentEmail = false
        this.emailRequestReceived = true
      })
      .catch(error => {
        console.log(error)
        this.emailRequestReceived = true
        this.succesfullySentEmail = false
      })
  }
}
