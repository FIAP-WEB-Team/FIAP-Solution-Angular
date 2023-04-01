import { Injectable } from '@angular/core';
import { FlightData } from './data/FlightData';
import { DUMMY_PASSANGER, PassengerData } from './data/PassengerData';
import { TicketData } from './data/TicketData';
import { BuySearch } from './data/BuySearch';

@Injectable({
  providedIn: 'root'
})
export class PassengerInfoService {
  passengerInfo: PassengerData = DUMMY_PASSANGER
  filghtInfo!: FlightData
  buySearch!:BuySearch

  constructor() { }

  setFlightData(flightInfo: FlightData) {
    this.filghtInfo = flightInfo;
  }

  setPassengerData(passengerInfo: PassengerData) {
    this.passengerInfo = passengerInfo;
  }
  
  getTicketInfo() {
    return new TicketData(this.passengerInfo.passengerID, this.filghtInfo.flightNumber)
  }
  setbuySearch(buySearch:BuySearch)
  {
    this.buySearch=buySearch
  }
  getbuySearch()
  {
    return this.buySearch
  }
}
