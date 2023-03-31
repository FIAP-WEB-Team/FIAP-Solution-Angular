import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { FlightService } from './flight.service';
import { PassengerService } from './passenger.service';
import { DUMMY_PASSANGER } from '../data/PassengerData';
import { TicketService } from './ticket.service';
import { TicketData } from '../data/TicketData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = BASE_URL + 'users/login';
  token: string = ''

  constructor(private http: HttpClient, private flightService: FlightService,
    private passengerService: PassengerService, private ticketService: TicketService) { }

  loginUser(username: string, password: string) {
    const body = { username, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<{ token: string }>(this.apiUrl, body, { headers }).subscribe(response => {
      this.token = response.token
      console.log(response)
      this.flightService.getFlights(this.token)
      // this.passengerService.createPassenger(this.token, DUMMY_PASSANGER)
      // this.ticketService.createTicket(this.token, new TicketData("YvSLwTb7eHUTm9bcL6uD", 785675))
    })
  }
}
