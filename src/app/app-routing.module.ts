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
import { authSocieteGuard } from './Guards/auth-societe.guard';
import { loginSocieteGuard } from './Guards/login-societe.guard';
import { CandidateRegisterComponent } from './Component/candidate-register/candidate-register.component';
import { CandidateLoginComponent } from './Component/candidate-login/candidate-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';
import { authCandidatGuard } from './Guards/auth-candidat.guard';
import { authAgentGuard } from './Guards/auth-agent.guard';
import { PaymentComponent } from './Component/payment/payment.component';


const routes: Routes = [
  {path:"dashboard",component:SocieteDashboardComponent,canActivate  : [loginSocieteGuard],children:[
    {path:"societe",component:SocieteComponent,canActivate  : [loginSocieteGuard]},
    {path:"offer",component:OffreSocieteComponent,canActivate  : [loginSocieteGuard]}, 
    {path:"postule/:offerid",component:PostuleComponent,canActivate  : [loginSocieteGuard]}
  ]},
  {path:"candidate/register",component:CandidateRegisterComponent},
  {path:"candidate/login", component:CandidateLoginComponent},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent,canActivate  : [] },
    {path:"payment",component:PaymentComponent },

  {path:"agent",component:AgentComponent,canActivate  : [authAgentGuard]},
  {path:"offer",component:OffreComponent ,canActivate  : [authCandidatGuard]}, 
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
