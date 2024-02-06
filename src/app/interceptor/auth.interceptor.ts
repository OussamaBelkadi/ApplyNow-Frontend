import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  token : any;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const routesToDisableAuthorization = ['/login'];
   const routesToDisableAuthorizationn = ['/register','http://localhost:4200/register'];

   if (routesToDisableAuthorization.some(route => request.url.includes(route))) {
    const modifiedReq = request.clone({
      headers: request.headers.delete('Authorization'),
    });

    return next.handle(modifiedReq);
   }

   if (routesToDisableAuthorizationn.some(route => request.url.includes(route))) {
    const modifiedReq = request.clone({
      headers: request.headers.delete('Authorization'),
    });

    return next.handle(modifiedReq);
   }
    
    const token = localStorage.getItem("token");
    if(token != null){
      this.token = token;
    }
    const headers : HttpHeaders = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    const authReq = request.clone({ headers });
    return next.handle(authReq);
  
  }
}
