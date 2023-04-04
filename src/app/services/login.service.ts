import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { FlightService } from './flight.service';
import { PassengerService } from './passenger.service';
import { DUMMY_PASSANGER } from '../data/PassengerData';
import { TicketService } from './ticket.service';
import { TicketData } from '../data/TicketData';
import { firstValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = BASE_URL + 'users/login';
  token: any= ''

  constructor(private http: HttpClient, private flightService: FlightService,
    private passengerService: PassengerService, private ticketService: TicketService) { }

   async loginUser(username: string, password: string) {
    const body = { username, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const response = (await firstValueFrom<{token:string}>( this.http.post<{token:string}>(this.apiUrl, body, { headers }))).token;

  
  
    // Retorna o valor retornado pela requisição HTTP
    return response;
  
    
  }
 
}
