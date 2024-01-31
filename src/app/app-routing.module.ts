import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './Component/societe/societe.component';
import { OffreComponent } from './Component/offre/offre.component';
import { RegisterComponent } from './Component/register/register.component';
import { SocieteDashboardComponent } from './Component/societe-dashboard/societe-dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { PostuleComponent } from './Component/postule/postule.component';
import { AgentComponent } from './Component/agent/agent.component';
import { OffreSocieteComponent } from './Component/offre-societe/offre-societe.component';
import { CandidateRegisterComponent } from './Component/candidate-register/candidate-register.component';
import { CandidateLoginComponent } from './Component/candidate-login/candidate-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  {path:"dashboard",component:SocieteDashboardComponent,children:[
    {path:"societe",component:SocieteComponent},
    {path:"offer",component:OffreSocieteComponent}, 
    {path:"postule/:offerid",component:PostuleComponent}
  ]},
  {path:"candidate/register",component:CandidateRegisterComponent},
  {path:"candidate/login", component:CandidateLoginComponent},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"agent",component:AgentComponent},
  {path:"offer",component:OffreComponent}, 
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: 'cancel', component: CancelComponent },
  { path: 'success', component: SucessComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
