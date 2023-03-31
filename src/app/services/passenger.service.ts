import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { PassengerData } from '../data/PassengerData';

@Injectable({
    providedIn: 'root'
})
export class PassengerService {

    private apiUrl = BASE_URL + 'passengers';
    passenger!: PassengerData

    constructor(private http: HttpClient) { }

    createPassenger(token: string, passenger: PassengerData) {
        this.passenger = passenger
        const body = {
            "BirthDate": passenger.birthDate,
            "FirstName": passenger.firstName,
            "LastName": passenger.lastName,
            "Gender": passenger.gender,
            "Nationality": passenger.nationality
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
