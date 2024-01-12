import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as OfferAction from '../Action/action';
import { OfferService } from "src/app/Service/offer.service";
import { of } from "rxjs";
import { mergeMap, map, catchError, } from "rxjs/operators";
import { Offers } from "src/app/Model/offers";
@Injectable()
export class OfferEffects{
    constructor(private actions$ : Actions,private offerService : OfferService) { }
    
    getOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferAction.getOffers),
      mergeMap(() =>
        this.offerService.fetchOffers(2).pipe(
          
          map((data) => OfferAction.getOffersSuccess({Offers : data}) ),
          catchError((error) => of(OfferAction.getOffersFailure(error)  ))
        )
      )
    )
  );

}