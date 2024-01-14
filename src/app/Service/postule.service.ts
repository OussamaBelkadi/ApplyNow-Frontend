import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostuleService {

  private url = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  fetchPostules(id:any):Observable<any>{
    return this.http.get(`${this.url}postule/${id}`);
  }

  fetchCv(cvpath : any):Observable<any> {

    console.log("the path " + cvpath);
    const correctPath = cvpath.replace(/\\/g, '/');
    console.log("the correct path " + correctPath);
    return this.http.get(`${this.url}postule/cv?cvPath=${correctPath}`, { responseType: 'arraybuffer' })
    .pipe(
      map(response => new Blob([response], { type: 'application/pdf' }))
    );

  }

  Postuler(data : any) :Observable<any>  {

      return this.http.post(`${this.url}postule`,data,{responseType : 'text'});
  
  }

}
