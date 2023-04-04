
import { formatDate } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { tap } from 'rxjs';
import { BuySearch } from 'src/app/data/BuySearch';
import { FlightData } from 'src/app/data/FlightData';

import { PassengerInfoService } from 'src/app/passenger-info.service';
import { BASE_URL } from 'src/app/services/base-url';
import { FlightService } from 'src/app/services/flight.service';
import { LoginService } from 'src/app/services/login.service';





@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})



export  class Screen1Component {
  flightType = ['Ida e Volta', 'Somente Ida/Volta'];
  departureList:String[]=[];
  arriveList:String[]=[];
  departureDateList:String[]=[];
  arriveDateList:string[]=[];
  passengersNumber=['1','2','3','4','5'];
 
   isExpandedFlightType:number=0;
 
  selectedFlightType: string = '';
  selectedDeparture: string = '';
  selectedArrive: string = '';
  selectedDepartureDate: string = '';
  selectedArriveDate: string = '';
  selectedPassengersNumber: string = '';
  buysearch!:BuySearch

 

 
  

constructor(
  public router:Router,
  private passengerinfo:PassengerInfoService,
  private FlightService:FlightService,
  private LoginService:LoginService,
 
 
){}

  submit()
  {
    if (this.selectedArrive!==' ' && this.selectedArriveDate!==' ' && this.selectedDeparture!==' ' && this.selectedDepartureDate!='',this.selectedFlightType!='',this.selectedPassengersNumber!='')
    {

      this.buysearch= new BuySearch(this.selectedFlightType, this.selectedDeparture, this.selectedArrive,this.selectedDepartureDate,this.selectedArriveDate)
      this.passengerinfo.setbuySearch(this.buysearch)
      this.router.navigate(['/app-select-price-screen'])
    }
    else
    {
      alert("Insira todas as informações requeridas.")
    }
  }


   async ngOnInit()
  {
    
   await  this.LoginService.loginUser("abana","rabana").
    then(ResponseToken=> this.FlightService.getFlights(ResponseToken))
   
    this.populatingPlaces()
  }
    
  ExpandDropBoxFlightType()
  {
  }
    
   
   
  
 populatingPlaces()
{
 
  for (let flight of this.FlightService.flights)
     { 
         this.departureList.push(flight.Departure);
         this.arriveList.push(flight.Arrival);
         this.departureDateList.push(formatDate(flight.DepartureDate,'dd/MM/yyyy', 'en-US'))
         this.arriveDateList.push(formatDate(flight.ArrivalDate,'dd/MM/yyyy', 'en-US'))
     }
}

}
