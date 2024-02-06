import { Action, createReducer, on } from "@ngrx/store";
import { OfferStateInterface } from "../OfferState.interface";
import * as OfferAction from '../Action/action'
import { state } from "@angular/animations";
// import { Action } from "rxjs/internal/scheduler/Action";
import { Offer } from "src/app/Model/offer.model";




export const initialState : OfferStateInterface = {
    isLoading: false,
    Offers: [],
    error: null
}

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
    on(OfferAction.getAllOffersAdmin,(state,action)=>(
        {...state,isLoading:false,
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
