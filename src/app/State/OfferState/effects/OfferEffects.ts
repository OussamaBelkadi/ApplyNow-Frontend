import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as OfferAction from '../Action/action';
import { OfferService } from "src/app/Service/offer.service";
import { of } from "rxjs";
import { mergeMap, map, catchError, } from "rxjs/operators";
import { Offers } from "src/app/Model/offers";
import { AgentService } from "src/app/Service/agent.service";
@Injectable()
export class OfferEffects{
    constructor(private actions$ : Actions,private offerService : OfferService,private AgentService : AgentService) { }
    
    getOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferAction.getOffers),
      mergeMap((action) =>
        this.offerService.fetchOffers(action.societeid).pipe(
          map((data)  => OfferAction.getOffersSuccess({Offers : data})),
          catchError((error) => of(OfferAction.getOffersFailure(error)  ))
          
        )
      )
    )
  );


  GetAllOffers$ = createEffect(()=>
  this.actions$.pipe(
    ofType(OfferAction.getAllOffersAdmin),
    mergeMap((action)=>
    this.AgentService.GetOffers(action.page,action.size).pipe(
      map((data)=>OfferAction.getAllOffers({Offers : data})),
      ))
    )
  )

  ValideOffer$ = createEffect(() =>
  this.actions$.pipe(
    ofType(OfferAction.ValideOffre),
    mergeMap((action)=>
      this.AgentService.valideOffer( action.idoffer,action.status).pipe(

        map((res)=>OfferAction.ValideOffreSuccess({response:res,idoffer:action.idoffer})),

        catchError((error)=> of(OfferAction.ValideOffreError({error:error})))
        

      )
    )
  ))


  CreateOffer$ = createEffect(()=>
        this.actions$.pipe(
          ofType(OfferAction.AddAnOffer),
          mergeMap((action)=>
            this.offerService.insertOffer(action).pipe(
              map((res)=>OfferAction.AddOfferSuccess({error:res})),
              catchError((error)=>of(OfferAction.AddOfferError({error:error})))
            )
          )
        )
  )
  
  
    

}