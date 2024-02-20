import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from '../Model/offers';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private url = "http://13.53.58.208:8000/";
  
  constructor(private http : HttpClient) { }

  valideOffer(id: number,status : String):Observable<any>{
    
    return this.http.post(`${this.url}offre/valide`,{'idOffre':id,'status':status}, { responseType: 'text' });
  
  }

  GetOffers(page : number,size:number):Observable<any>{
    if(size > 10){
        size  = 10;
    }
    return this.http.get<Offers[]>(`${this.url}offre/${page}/${size}`);

  }

}
