import { Offers } from "src/app/Model/offers";

export interface OfferStateInterface{
    isLoading : boolean;
    Offers : Offers[];
    error : String | null; 
}