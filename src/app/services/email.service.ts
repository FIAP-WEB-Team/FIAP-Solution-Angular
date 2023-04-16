import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { firstValueFrom } from 'rxjs';
import { EmailData } from '../data/EmailData';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    private apiUrl = BASE_URL + 'email';

    constructor(private http: HttpClient) { }

    sendEmail(email: EmailData, token: string) {
        const body = {
            "to": email.to,
            "subject": email.subject,
            "body": email.body
        }
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json');;
        return firstValueFrom(this.http.post<EmailData>(this.apiUrl, body, { headers }));
    }
}
