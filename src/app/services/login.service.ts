import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = BASE_URL + 'users/login';
  token = ''

  constructor(private http: HttpClient) { }

  async loginUser(username: string, password: string) {
    const body = { username, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return firstValueFrom<{ token: string }>(this.http.post<{ token: string }>(this.apiUrl, body, { headers })).then(
      response => { this.token = response.token; return response });
  }
}
