
import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightData } from 'src/app/data/FlightData';
import { ControlService } from 'src/app/services/control.service';

import { FlightService } from 'src/app/services/flight.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component {
  flightType = ['Ida e Volta', 'Somente Ida/Volta'];
  departureList: String[] = [];
  arriveList: String[] = [];
  departureDateList: String[] = [];
  arriveDateList: string[] = [];
  passengersNumber = ['1', '2', '3', '4', '5'];

  isExpandedFlightType: number = 0;

  selectedFlightType: string = '';
  selectedDeparture: string = '';
  selectedArrival: string = '';
  selectedDepartureDate: string = '';
  selectedArrivalDate: string = '';
  selectedPassengersNumber: string = '';


  constructor(public router: Router, private FlightService: FlightService, private LoginService: LoginService, private controlService: ControlService) {
  }

  validate() {
    return this.selectedArrival !== ' ' && this.selectedArrivalDate !== ' ' && this.selectedDeparture !== ' ' && this.selectedDepartureDate != '' &&
      this.selectedFlightType != '' && this.selectedPassengersNumber != ''
  }

  submit() {
    if (this.validate()) {
      this.FlightService.selectedFlight = new FlightData(
        this.selectedArrival, this.selectedArrivalDate, this.selectedDeparture, this.selectedDepartureDate, 0.0, 0)
      this.router.navigate(['/flights'])
    }
    else {
      alert("Insira todas as informações requeridas.")
    }
  }

  async ngOnInit() {
    this.controlService.updateFormPosition(1)
    if (!this.LoginService.token)
      await this.LoginService.loginUser("abana", "rabana")
        .then(response => this.FlightService.getFlights(response.token))
        .then(() => this.populatingPlaces())
        .catch(error => console.log(error))
    else
      this.populatingPlaces()
  }

  populatingPlaces() {
    for (let flight of this.FlightService.flights) {
      this.departureList.push(flight.Departure);
      this.arriveList.push(flight.Arrival);
      this.departureDateList.push(formatDate(flight.DepartureDate, 'dd/MM/yyyy', 'en-US'))
      this.arriveDateList.push(formatDate(flight.ArrivalDate, 'dd/MM/yyyy', 'en-US'))
    }
  }

}
