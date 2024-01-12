import { createReducer, on } from "@ngrx/store";
import { OfferStateInterface } from "../OfferState.interface";
import * as OfferAction from '../Action/action'

export const initialState : OfferStateInterface = {
    isLoading: false,
    Offers: [],
    error: null
}

export const reducers = createReducer(initialState,
    on(OfferAction.getOffers,(state)=>({
        ...state,isLoading : true
    })),

    on(OfferAction.getOffersSuccess,(state,action)=>({
        ...state,isLoading : false,Offers : action.Offers
    })),

    on(OfferAction.getOffersFailure,(state,action)=>({
        ...state,isLoading : false,error : action.error
    }))
)