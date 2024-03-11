
// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailForm } from './email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'https://campingneretvabackend2.vercel.app'; // Promenite na odgovarajući URL vašeg Node.js servera
  private baseUrl1 = 'http://localhost:5000'; // Promenite na odgovarajući URL vašeg Node.js servera

  constructor(private http: HttpClient) {}

  sendEmail(emailForm: EmailForm): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.baseUrl}/api/sendEmail`, emailForm, { headers });
  }
  sendMessage(emailForm: EmailForm): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.baseUrl}/api/sendMessage`, emailForm, { headers });
  }
  sendEmail1(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-email`, data);
  }
  sendEmail2(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-email`, data);
  }
}
