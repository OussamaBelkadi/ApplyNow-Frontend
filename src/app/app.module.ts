import { NgModule, isDevMode } from '@angular/core';
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
import { OffreSocieteComponent } from './Component/offre-societe/offre-societe.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './State/OfferState/Reducer/reducer';
import { EffectsModule } from '@ngrx/effects';
import { OfferEffects } from './State/OfferState/effects/OfferEffects';
 
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
    PostuleDialogComponent,
    OffreSocieteComponent
    
  ],
  imports: [
    StoreModule.forFeature('Offers',reducers),
    EffectsModule.forFeature([OfferEffects]),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
