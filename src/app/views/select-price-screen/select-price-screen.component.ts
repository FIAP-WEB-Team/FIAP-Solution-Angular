import { formatCurrency, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BuySearch } from 'src/app/data/BuySearch';
import { FlightData } from 'src/app/data/FlightData';
import { PassengerInfoService } from 'src/app/passenger-info.service';
import { FlightService } from 'src/app/services/flight.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-select-price-screen',
  templateUrl: './select-price-screen.component.html',
  styleUrls: ['./select-price-screen.component.css']
})
export class SelectPriceScreenComponent {
 

  flightList:FlightData[]=[]
  flights:any
  SelectedFlight!:FlightData
  isSelectedDiv:boolean=false
  selectedFlightIndex:number=-1;

  selectedFlights: {[key: number]: boolean} = {}; // objeto para mapear as seleções de cada voo

  selectedDiv(i: number) {
    if (this.selectedFlightIndex == i) {
      // Se o mesmo voo for selecionado, desmarque a seleção
      this.selectedFlightIndex = -1;
     
    } else {
      // Se um novo voo for selecionado, desmarque todos os outros
      this.selectedFlightIndex = i;
      this.selectedFlights[i]=true
    
      for (let j = 0; j < this.flightList.length; j++) {
        if (j !== i) {
          this.selectedFlights[j] = false;
        }
      }
    }
  }

 constructor( private PassengerInfoService: PassengerInfoService, private routers: Router,private http: HttpClient, private FlightService:FlightService, private LoginService:LoginService)
 {

  
 }
 information:BuySearch=this.PassengerInfoService.getbuySearch()
  
  async ngOnInit()
  {
   
    await  this.LoginService.loginUser("abana","rabana").
    then(ResponseToken=> this.FlightService.getFlights(ResponseToken))
   this.populandoListaFlight();
  }
populandoListaFlight()
{
  for (let flight of this.FlightService.flights)
{
  this.flightList.push(new FlightData(
    flight.Arrival,
    formatDate(flight.ArrivalDate, 'dd/MM/yyyy HH:mm:ss', 'en-US'),
    flight.Departure,
    formatDate(flight.DepartureDate,'dd/MM/yyyy HH:mm:ss', 'en-US'),
    flight.Price,
    flight.FlightNumber
  ));
}
}
backPage()
{
  this.routers.navigate(['/screen1'])
}



}
