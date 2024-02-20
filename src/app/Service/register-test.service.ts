import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterTestService {
  private url = "http://localhost:8000";
  constructor(private http:HttpClient) { }

  registerCandidate(user:any){
      return this.http.post(`${this.url}/api/v1/candidate/register`, user, {responseType : "text"});
  }
}
