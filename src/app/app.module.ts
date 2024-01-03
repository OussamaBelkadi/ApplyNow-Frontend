import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocieteComponent } from './Component/societe/societe.component';
import { AgentComponent } from './Component/agent/agent.component';
import { SocieteDashboardComponent } from './Component/societe-dashboard/societe-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OffreComponent } from './Component/offre/offre.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';

import {MatPaginatorModule} from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferDialogComponent } from './Component/offer-dialog/offer-dialog.component';
import { PostuleComponent } from './Component/postule/postule.component';
import { CvDialogComponent } from './Component/cv-dialog/cv-dialog.component';
import { SafeUrlPipe } from './Service/safe-url.pipe';
import { PostuleDialogComponent } from './Component/postule-dialog/postule-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SocieteComponent,
    AgentComponent,
    SocieteDashboardComponent,
    OffreComponent,
    LoginComponent,
    RegisterComponent,
    OfferDialogComponent,
    PostuleComponent,
    CvDialogComponent,
    SafeUrlPipe,
    PostuleDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
