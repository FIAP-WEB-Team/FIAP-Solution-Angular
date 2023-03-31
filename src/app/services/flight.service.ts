import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { FlightData } from '../data/FlightData';

@Injectable({
    providedIn: 'root'
})
export class FlightService {

    private apiUrl = BASE_URL + 'flights';
    flights!: [FlightData]

    constructor(private http: HttpClient) { }

    getFlights(token: string) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return this.http.get<[FlightData]>(this.apiUrl, { headers }).subscribe({
            next: response => {
                this.flights = response
            }, error: error => {
                console.log(error)
            }
        })
    }
}
