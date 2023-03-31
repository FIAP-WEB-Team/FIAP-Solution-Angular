import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { TicketData } from '../data/TicketData';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private apiUrl = BASE_URL + 'tickets';

    constructor(private http: HttpClient) { }

    createTicket(token: string, ticket: TicketData) {
        const body = {
            "flightID": ticket.flightID,
            "passengerID": ticket.passengerID
        }
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json');
        return this.http.post(this.apiUrl, body, { headers }).subscribe({
            next: response => {
                console.log(response)
            },
            error: error => console.log(error)
        });
    }
}
