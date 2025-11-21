import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailChimpService {

  constructor(private http:HttpClient) { }
private apiKey="0ce6ef76e3c30268095843cdfdd1cc7a-us21";

  addEmail(body:any){
    const url = "https://us21.api.mailchimp.com/3.0/lists/3d2c61784c/members";

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.apiKey);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(url, body, {headers:headers});
  }
}
