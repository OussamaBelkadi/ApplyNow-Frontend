import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as OfferAction from '../Action/action';
import { OfferService } from "src/app/Service/offer.service";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError, } from "rxjs/operators";
import { Offers } from "src/app/Model/offers";
 @Injectable()

 
export class OfferEffects{
    constructor(private offerService:OfferService, private offerActions:Actions) { }
    getAllOffersEffect:Observable<any> = createEffect(
      ()=>this.offerActions.pipe(
          ofType<OfferAction.GetAllOffersAction>(OfferAction.OfferActionsTypes.Get_ALL_Offers),
          mergeMap((action)=>{
              return this.offerService.getAllOffers(action.payload).pipe(
                  map((offers)=> new OfferAction.GetAllOffersSuccess(offers)),
                  catchError((err)=>of(new OfferAction.GetAllOffersError(err)))
              )
          })
      )
  )
  //   getOffers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(OfferAction.getOffers),
  //     mergeMap(() =>
  //       this.offerService.fetchOffers(1).pipe(
          
  //         map((data) => OfferAction.getOffersSuccess({Offers : data}) ),
  //         catchError((error) => of(OfferAction.getOffersFailure(error)  ))
  //       )
  //     )
  //   )
  // );

}