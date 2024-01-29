import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Societe } from '../Model/societe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http:HttpClient) { }
  
  private url = "http://localhost:8000/";
  
  RegisterCompany(company : Societe):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.url}societes/register`,company,{headers})
  }

  LoginCompany(email: String ,password:String):Observable<any>{

    return this.http.post<any>(`${this.url}societes/login`,{email,password});

  }

  approuveCandidate(id : number,status : String){

    return this.http.post(`${this.url}postule/valide/${id}/${status}`,{});

  }
  
}
