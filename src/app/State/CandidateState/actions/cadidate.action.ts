import { Action } from "@ngrx/store";
import { Candidate } from "src/app/Model/candidate.model";

export enum CandidateCreateActionsTypes{
    GET_CANDIDATE_CREATE = "[candidate] Create Candidate",
    GET_CANDIDATE_CREATE_SUCCESS = "[Candidate] Get Candidate Success",
    GET_CANDIDATE_CREATE_ERROR = "[Candidate] Get Candidate Error"
}
export enum CandidateActionsTypes{
    GET_CANDIDATE = "[candidate] Get Candidate",
    GET_CANDIDATE_SUCCESS = "[Candidate] Get Candidate Success",
    GET_CANDIDATE_ERROR = "[Candidate] Get Candidate Error"
}

export class GetCandidateCreate implements Action {
    type: CandidateCreateActionsTypes = CandidateCreateActionsTypes.GET_CANDIDATE_CREATE;

    constructor(public payload:any) {
        
    }
}

export class GetCandidateCreateSuccess implements Action {
    type: CandidateCreateActionsTypes = CandidateCreateActionsTypes.GET_CANDIDATE_CREATE_SUCCESS;
    constructor(public payload: Candidate) { 
    }
}
export class GetCandidateCreateError implements Action {
    type: CandidateCreateActionsTypes = CandidateCreateActionsTypes.GET_CANDIDATE_CREATE_ERROR;
    constructor(public payload: String) {
    }
}

export class GetCandidate implements Action {

    type: CandidateActionsTypes = CandidateActionsTypes.GET_CANDIDATE;

    constructor(public payload:any) {
        
    }
}
export class GetCandidateSuccess implements Action {
    type: CandidateActionsTypes = CandidateActionsTypes.GET_CANDIDATE_SUCCESS;
    constructor(public payload: Candidate) { 
    }
}
export class GetCandidateError implements Action {
    type: CandidateActionsTypes = CandidateActionsTypes.GET_CANDIDATE_ERROR;
    constructor(public payload: String) {
    }
}

export type CandidateActions = GetCandidate | GetCandidateSuccess | GetCandidateError | GetCandidateCreate | GetCandidateCreateSuccess | GetCandidateCreateError;