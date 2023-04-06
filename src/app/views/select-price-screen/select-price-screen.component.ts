import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightData } from 'src/app/data/FlightData';
import { FlightService } from 'src/app/services/flight.service';


@Component({
  selector: 'app-select-price-screen',
  templateUrl: './select-price-screen.component.html',
  styleUrls: ['./select-price-screen.component.css']
})
export class SelectPriceScreenComponent {
  flightList: FlightData[] = []
  selectedFlightIndex: number = -1;

  selectedFlights: { [key: number]: boolean } = {};

  selectedDiv(i: number) {
    if (this.selectedFlightIndex >= 0)
      this.selectedFlights[this.selectedFlightIndex] = false
    if (this.selectedFlightIndex == i) {
      this.selectedFlightIndex = -1;
    } else {
      this.selectedFlightIndex = i;
      this.selectedFlights[i] = true
    }
  }

  constructor(private routers: Router, private FlightService: FlightService) {
  }

  ngOnInit() {
    this.populateFlightList()
  }

  populateFlightList() {
    for (let flight of this.FlightService.flights) {
      this.flightList.push(new FlightData(
        flight.Arrival,
        formatDate(flight.ArrivalDate, 'dd/MM/yyyy HH:mm:ss', 'en-US'),
        flight.Departure,
        formatDate(flight.DepartureDate, 'dd/MM/yyyy HH:mm:ss', 'en-US'),
        flight.Price,
        flight.FlightNumber
      ));
    }
    for (let j = 0; j < this.flightList.length; j++)
      this.selectedFlights[j] = false;
  }

  backPage() {
    this.routers.navigate(['/screen1'])
  }

  nextPage() {
    if (this.selectedFlightIndex == -1)
      alert("Selecione um voo para continuar")
    else {
      console.log(this.FlightService.flights)
      this.FlightService.selectedFlight = this.FlightService.flights[this.selectedFlightIndex]
      this.routers.navigate(['/passenger'])
    }
  }
}
