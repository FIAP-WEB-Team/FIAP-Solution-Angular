import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { FlightData } from '../data/FlightData';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlightService {

    private apiUrl = BASE_URL + 'flights';
    flights!: [FlightData]
    selectedFlight!: FlightData

    constructor(private http: HttpClient) { }

    setSelectedFlight(flightData: FlightData){
        this.selectedFlight = flightData
    }

    getFlights(token: string) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return firstValueFrom(this.http.get<[FlightData]>(this.apiUrl, { headers })).then(response => this.flights = response)
    }
}
