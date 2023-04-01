import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerData } from '../data/PassengerData';
import { PassengerService } from '../services/passenger.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-passenger-input',
  templateUrl: './passenger-input.component.html',
  styleUrls: ['./passenger-input.component.css']
})
export class PassengerInputComponent {
  startDate = new Date(2010, 1, 1)
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    birthDate: '',
    nationality: '',
    gender: ''
  })
  flightInfo = [{
    Departure: 'Maceió',
    DepartureDate: new Date(2023, 4, 12, 15, 30),
    Arrival: 'Curitiba',
    ArrivalDate: new Date(2023, 4, 12, 18, 30),
    FlightNumber: 128079,
    Price: 1078.9
  }]

  constructor(private formBuilder: FormBuilder, private passengerService: PassengerService, private loginService: LoginService,
    private router: Router) { }

  validateForm(passenger: PassengerData) {
    return passenger.birthDate !== '' && passenger.firstName !== '' && passenger.lastName !== '' && passenger.gender !== ''
  }

  onSubmit() {
    let passenger = new PassengerData(this.checkoutForm.value.firstName!, this.checkoutForm.value.lastName!, this.checkoutForm.value.birthDate!,
      this.checkoutForm.value.nationality!, this.checkoutForm.value.gender!)
    if (!this.validateForm(passenger))
      window.alert(`Há campos inválidos`)
    else {
      let birthDate = new Date(passenger.birthDate)
      passenger.birthDate = formatDate(birthDate, 'dd/MM/yyyy', 'en-US')
      this.passengerService.createPassenger(this.loginService.token, passenger)

      this.router.navigate(['/checkout'])
    }
  }
}
