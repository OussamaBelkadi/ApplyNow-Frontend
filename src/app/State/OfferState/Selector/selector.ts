import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../AppStateInterface";
import { state } from "@angular/animations";
import { Offers } from "src/app/Model/offers";

export const selectorFeature = (state : AppStateInterface)=>state.Offers;

export const IsLoadigSelector = createSelector(
    selectorFeature,
    (state) => state.isLoading
) 

export const OffersSelector = createSelector(
    selectorFeature,
    (state) => state.Offers as Offers[]
) 

export const errorSelector = createSelector(
    selectorFeature,
    (state) => state.error
) 