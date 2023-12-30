import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocieteComponent } from './Component/societe/societe.component';
import { AgentComponent } from './Component/agent/agent.component';
import { SocieteDashboardComponent } from './Component/societe-dashboard/societe-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OffreComponent } from './Component/offre/offre.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SocieteComponent,
    AgentComponent,
    SocieteDashboardComponent,
    OffreComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
