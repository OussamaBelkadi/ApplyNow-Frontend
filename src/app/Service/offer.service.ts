import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Offers } from '../Model/offers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  

  private url = "http://localhost:8000/";
  constructor(private http : HttpClient)  { }

  insertOffer(offer : Offers) :Observable<any>{

    return this.http.post(`${this.url}offre/create`, offer,{responseType : 'text'});
  
  }

  fetchOffers(id:number) : Observable<Offers[]> {

    return this.http.get<Offers[]>(`${this.url}societes/offers/${id}`);
   
  }
  
  getAllOffers(pagable:any): Observable<any> {
    return this.http.get<any>(`${this.url}offre/${pagable.page}/${pagable.size}`);

  }

}
