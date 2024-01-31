import { Action, createReducer, on } from "@ngrx/store";
import { OfferStateInterface } from "../OfferState.interface";
import * as OfferAction from '../Action/action'
import { Offer } from "src/app/Model/offer.model";

// export const initialState : OfferStateInterface = {
//     isLoading: false,
//     Offers: [],
//     error: null
// }

// export const reducers = createReducer(initialState,
//     on(OfferAction.getOffers,(state)=>({
//         ...state,isLoading : true
//     })),

//     on(OfferAction.getOffersSuccess,(state,action)=>({
//         ...state,isLoading : false,Offers : action.Offers
//     })),

//     on(OfferAction.getOffersFailure,(state,action)=>({
//         ...state,isLoading : false,error : action.error
//     }))
// )
export enum OfferStateEnum{
    LOADING ="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial"
}

export interface OfferState{
    offer: Offer[]
    errorMessage: string,
    dataState:OfferStateEnum
}

const initState:OfferState={
    offer:[],
    errorMessage: "",
    dataState: OfferStateEnum.INITIAL
}

export function offerReducer(state:OfferState=initState, action:Action):OfferState{
    switch (action.type){
        case OfferAction.OfferActionsTypes.Get_ALL_Offers: 
            return {...state, dataState:OfferStateEnum.LOADING}
        case OfferAction.OfferActionsTypes.Get_ALL_Offers_Success:
            return {...state, dataState:OfferStateEnum.LOADED, offer: (<OfferAction.OffersActions>action).payload}
        case OfferAction.OfferActionsTypes.Get_ALL_Offers_Error:
            return {...state, dataState:OfferStateEnum.ERROR, offer: (<OfferAction.OffersActions>action).payload}
        
        default: return {...state}
    }
}