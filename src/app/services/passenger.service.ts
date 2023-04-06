import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { PassengerData } from '../data/PassengerData';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassengerService {

    private apiUrl = BASE_URL + 'passengers';
    passenger!: PassengerData

    constructor(private http: HttpClient) { }

    setPassenger(passenger: PassengerData){
        this.passenger = passenger
    }

    async createPassenger(token: string, passenger: PassengerData) {
        this.passenger = passenger
        const body = {
            "BirthDate": this.passenger!.birthDate,
            "FirstName": this.passenger!.firstName,
            "LastName": this.passenger!.lastName,
            "Gender": this.passenger!.gender,
            "Nationality": this.passenger!.nationality
        }
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json');
        return firstValueFrom(this.http.post<PassengerData>(this.apiUrl, body, { headers })).then(response => {
            this.passenger = response
            return response
        });
    }
}
