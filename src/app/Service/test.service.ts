import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidateTest } from '../Model/Question';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  
  private url = "http://localhost:8000";

  getQuestions(email: any){
    // Setting headers including Content-Type
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Sending data as JSON string
    return this.http.post(`${this.url}/api/register`, JSON.stringify({ email }), { headers });
  }

  ValidateTest(validate: ValidateTest){
    const req = validate;    
    console.log( req);
    return this.http.post(`${this.url}/api/test`,validate,{responseType:"text"});
  }
}

