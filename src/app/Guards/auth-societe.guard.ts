import { CanActivateFn,Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';


export const authSocieteGuard: CanActivateFn = (route, state) => {
 
  const SID = localStorage.getItem("societeid");
  if(SID === null){
    const route = inject(Router);
    route.navigate(['/login']);
    return false;
  }else{

    return true;
  }
  
};
