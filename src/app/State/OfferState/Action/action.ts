import { Action, createAction, props } from "@ngrx/store";
import { Offer } from "src/app/Model/offer.model";
import { Offers } from "src/app/Model/offers";

export const getOffers = createAction('[Offers] Get Offers',props<{societeid : number}>())
export const getOffersSuccess = createAction('[Offers] Get Offers success',props< {Offers : Offers[]} >())
export const getOffersFailure = createAction('[Offers] Get Offers Failure',props<{error : String}>())
//agent
export const getAllOffersAdmin = createAction('[Offers] Get All Offers',props<{page:number,size:number}>());
export const getAllOffers = createAction('[Offers] Get All Offers Admin',props< {Offers : Offers[]} >());
 
export const ValideOffre = createAction('[Offer] valide an Offer',props<{idoffer : number,status : String}>())
export const ValideOffreSuccess = createAction('[Offer] valide an Offer Success',props<{response : String,idoffer:number}>());
export const ValideOffreError = createAction('[Offer] valide an Offer Error',props<{error : String}>());

// export const getAllOffersValidation = createAction('[Offers] Get All Offers Admin',props< {Offers : Offers[]} >());
export const LoginSocieteSuccess = createAction('[Societe] login ',props<{email : String ,password : String}>());
export const LoginSocieteError = createAction('[Societe] login ',props<{email : String ,password : String}>());
//create an Offer 
export const AddAnOffer = createAction('[Offer] create an offer',props<Offers>());
export const AddOfferSuccess = createAction('[Offer] create an Offer success',props<{error : String}>());
export const AddOfferError = createAction('[Offer] create an Offer error',props<{error : String}>());



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
