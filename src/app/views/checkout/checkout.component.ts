import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PassengerService } from '../../services/passenger.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketData } from 'src/app/data/TicketData';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  loadingCheckout = true
  checkoutSuccess = false

  passengerInfo = this.passengerService.passenger
  selectedFlight = this.flightService.selectedFlight

  constructor(private passengerService: PassengerService, private ticketService: TicketService, private router: Router,
    private loginService: LoginService, private flightService: FlightService) { }

  sendInfoToEmail() {

  }

  ngOnInit() {
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
    }
    else
      this.router.navigate(['/'])
  }
}
