import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private url = "http://localhost:8000/";
  
  constructor(private http : HttpClient) { }

  valideOffer(id: number,status : String):Observable<any>{

    return this.http.post(`${this.url}offre/valide`,{'idOffre':id,'status':status}, { responseType: 'text' });
  
  }

  GetOffers(page : number,size:number):Observable<any>{
    if(size > 10){
        size  = 10;
    }
    return this.http.get(`${this.url}offre/${page}/${size}`)

  }

}
