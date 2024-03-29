import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { jwtDecode } from "jwt-decode";

export const loginSocieteGuard: CanActivateFn = (route, state) => {

  
  const Token = localStorage.getItem("token");

  if(Token !== null){
    const tokenPayload = jwtDecode(Token);
    console.log("role decoded " + tokenPayload.roles);
    if(tokenPayload.roles === '[Role_Societe]'){
        return true;
    }
    const route = inject(Router);
    route.navigate(['/']);
    return false;    
  }else{
    const routee = inject(Router);
    routee.navigate(['/']);
    return false;
  }
 
  const routee = inject(Router);
  routee.navigate(['/']);
  return false;  
  
};
