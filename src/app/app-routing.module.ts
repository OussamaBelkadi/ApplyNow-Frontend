import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './Component/societe/societe.component';
import { OffreComponent } from './Component/offre/offre.component';
import { RegisterComponent } from './Component/register/register.component';
import { SocieteDashboardComponent } from './Component/societe-dashboard/societe-dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { PostuleComponent } from './Component/postule/postule.component';
import { AgentComponent } from './Component/agent/agent.component';

const routes: Routes = [
  {path:"dashboard",component:SocieteDashboardComponent,children:[
    {path:"societe",component:SocieteComponent},
    {path:"offer",component:OffreComponent}, 
    {path:"postule/:offerid",component:PostuleComponent}
  ]},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"agent",component:AgentComponent},
  {path:"offer",component:OffreComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
