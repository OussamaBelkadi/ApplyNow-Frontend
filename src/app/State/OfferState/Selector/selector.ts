import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../AppStateInterface";
import { state } from "@angular/animations";

export const selectorFeature = (state : AppStateInterface)=>state.Offers;

export const IsLoadigSelector = createSelector(
    selectorFeature,
    (state) => state.isLoading
) 

export const OffersSelector = createSelector(
    selectorFeature,
    (state) => state.Offers
) 

export const errorSelector = createSelector(
    selectorFeature,
    (state) => state.error
) 