import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../Model/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private url = "http://localhost:8000/";

  constructor(private http : HttpClient) { }


// TODO: realized the completed url for request
  registerCandidate(cadidate:Candidate):Observable<any>{
    return this.http.post(`${this.url}api/v1/candidate/register`, cadidate);
  }

  getCandidate(candidate:Candidate):Observable<any>{
    return this.http.post(`${this.url}api/v1/candidate/login`, candidate);
  }


}
