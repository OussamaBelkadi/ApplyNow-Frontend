import { Action, createAction, props } from "@ngrx/store";
import { Offer } from "src/app/Model/offer.model";

// export const getOffers = createAction('[Offers] Get Offers')
// export const getOffersSuccess = createAction('[Offers] Get Offers success',props< {Offers : Offers[]} >())
// export const getOffersFailure = createAction('[Offers] Get Offers Failure',props<{error : String}>())

export enum OfferActionsTypes{
    Get_ALL_Offers = "[Offer] Get All Offers",
    Get_ALL_Offers_Success = "[Offer] Get All Offers Success",
    Get_ALL_Offers_Error = "[Offer] Get All Offers Errors",
}
  
export class GetAllOffersAction implements Action{
    type: OfferActionsTypes = OfferActionsTypes.Get_ALL_Offers;

    constructor(public payload:any){

    }
}

export class GetAllOffersSuccess implements Action{
    type: OfferActionsTypes = OfferActionsTypes.Get_ALL_Offers_Success;
    constructor(public payload: Offer[]){

    }
}

export class GetAllOffersError implements Action{
    type: OfferActionsTypes = OfferActionsTypes.Get_ALL_Offers_Error;
    constructor(public payload: string){
        
    }
}

export type OffersActions = GetAllOffersAction | GetAllOffersSuccess | GetAllOffersError;