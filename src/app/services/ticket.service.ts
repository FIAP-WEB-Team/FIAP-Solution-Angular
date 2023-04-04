import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { TicketData } from '../data/TicketData';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private apiUrl = BASE_URL + 'tickets';

    constructor(private http: HttpClient) { }

    async createTicket(token: string, ticket: TicketData) {
        const body = {
            "flightID": ticket.flightID,
            "passengerID": ticket.passengerID
        }
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json');
        return firstValueFrom(this.http.post(this.apiUrl, body, { headers }));
    }
}
