import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Offers } from '../Model/offers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  
  private url = "http://localhost:8000/";
  constructor(private http : HttpClient) { }

  insertOffer(offer : Offers) :Observable<any>{
    return this.http.post(`${this.url}offre/create`, offer);
  }

  fetchOffers(id:number) :Observable<any>{
    return this.http.get(`${this.url}societes/offers/${id}`);
  }

}
