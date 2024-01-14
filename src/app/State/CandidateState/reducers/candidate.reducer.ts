import { Action } from "@ngrx/store"
import { Candidate } from "src/app/Model/candidate.model"
import { CandidateActions, CandidateActionsTypes, CandidateCreateActionsTypes } from "../actions/cadidate.action"

export enum CandidateStateEnum{
    LOADING ="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial"
}

export interface CandidateState{
    candidate: Candidate[]
    errorMessage: string,
    dataState:CandidateStateEnum
}

const initState:CandidateState={
    candidate:[],
    errorMessage: "",
    dataState: CandidateStateEnum.INITIAL
}

export function candidateReducer(state:CandidateState=initState, action:Action):CandidateState{
    switch (action.type){
        case CandidateCreateActionsTypes.GET_CANDIDATE_CREATE: 
            return {...state, dataState:CandidateStateEnum.LOADING}
        case CandidateCreateActionsTypes.GET_CANDIDATE_CREATE_SUCCESS:
            return {...state, dataState:CandidateStateEnum.LOADED, candidate: (<CandidateActions>action).payload}
        case CandidateCreateActionsTypes.GET_CANDIDATE_CREATE_ERROR:
            return {...state, dataState:CandidateStateEnum.ERROR, candidate: (<CandidateActions>action).payload}
            case CandidateActionsTypes.GET_CANDIDATE: 
            return {...state, dataState:CandidateStateEnum.LOADING}
        case CandidateActionsTypes.GET_CANDIDATE_SUCCESS:
            return {...state, dataState:CandidateStateEnum.LOADED, candidate: (<CandidateActions>action).payload}
        case CandidateActionsTypes.GET_CANDIDATE_ERROR:
            return {...state, dataState:CandidateStateEnum.ERROR, candidate: (<CandidateActions>action).payload}
        
        default: return {...state}
    }
}