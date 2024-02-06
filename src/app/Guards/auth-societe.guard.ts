import { CanActivateFn,Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';


export const authSocieteGuard: CanActivateFn = (route, state) => {
 
  const SID = localStorage.getItem("token");
  if(SID === null){
    const route = inject(Router);
    route.navigate(['/login']);
    return true;
  }
  return false;
};
