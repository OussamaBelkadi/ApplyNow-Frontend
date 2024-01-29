import { createReducer, on } from "@ngrx/store";
import { OfferStateInterface } from "../OfferState.interface";
import * as OfferAction from '../Action/action'
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";

export const initialState : OfferStateInterface = {
    isLoading: false,
    Offers: [],
    error: null
}

export const reducers = createReducer(initialState,
    on(OfferAction.getOffers,(state,action)=>({
        ...state,isLoading : true,
    })),
    on(OfferAction.getOffersSuccess,(state,action)=>({
        ...state,isLoading : false,Offers : action.Offers
    })),

    on(OfferAction.getOffersFailure,(state,action)=>({
        ...state,isLoading : false,error : action.error
    })),
    on(OfferAction.getAllOffers,(state,action)=>({
            ...state,isLoading : false,Offers : action.Offers
    })),
    on(OfferAction.getAllOffersAdmin,(state,action)=>({
        ...state,isLoading:false,
    })),
    on(OfferAction.ValideOffre,(state,action)=>({
        ...state,
    })),
    on(OfferAction.ValideOffreSuccess,(state,action)=>({
        ...state,isLoading:false,error:action.response
            
    })),
    on(OfferAction.ValideOffreError,(state,action)=>({
        ...state,isLoading:false,error:action.error
    })),
    on(OfferAction.AddAnOffer,(state,action)=>({
        ...state,isLoading:true
    })),
    on(OfferAction.AddOfferSuccess,(state,action)=>({
        ...state,isLoading:true,error:action.error
    })),
    on(OfferAction.AddOfferError,(state,action)=>({
        ...state,isLoading:true,error:action.error
    }))
    
    
)