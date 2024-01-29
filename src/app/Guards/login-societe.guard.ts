import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';


export const loginSocieteGuard: CanActivateFn = (route, state) => {

  
  const SID = localStorage.getItem("societeid");
  if(SID === null){
    
    return true;
  }else{
    const route = inject(Router);
    route.navigate(['/dashboard/societe']);
    return false;
  }
};
