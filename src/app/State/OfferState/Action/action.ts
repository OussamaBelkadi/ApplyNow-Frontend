import { createAction, props } from "@ngrx/store";
import { Offers } from "src/app/Model/offers";

export const getOffers = createAction('[Offers] Get Offers')
export const getOffersSuccess = createAction('[Offers] Get Offers success',props< {Offers : Offers[]} >())
export const getOffersFailure = createAction('[Offers] Get Offers Failure',props<{error : String}>())
