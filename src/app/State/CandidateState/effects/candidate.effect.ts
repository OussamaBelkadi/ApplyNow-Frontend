import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { CandidateActionsTypes, CandidateCreateActionsTypes, GetCandidate, GetCandidateCreate, GetCandidateCreateError, GetCandidateCreateSuccess, GetCandidateError, GetCandidateSuccess } from "../actions/cadidate.action";
import { CandidateService } from "src/app/Service/candidate.service";

@Injectable()
export class CandidateEffect{
    constructor(private candidateService:CandidateService, private candidateAction:Actions){}

    sendCandidateEffect:Observable<any> = createEffect(
        ()=>this.candidateAction.pipe(
            ofType<GetCandidateCreate>(CandidateCreateActionsTypes.GET_CANDIDATE_CREATE),
            mergeMap((action)=>{
                return this.candidateService.registerCandidate(action.payload).pipe(
                    map((candidate)=> new GetCandidateCreateSuccess(candidate)),
                    catchError((err)=>of(new GetCandidateCreateError(err)))
                )
            })
        )
    )
    
    getCandidateEffect:Observable<any> = createEffect(
        ()=>this.candidateAction.pipe(
            ofType<GetCandidate>(CandidateActionsTypes.GET_CANDIDATE),
            mergeMap((action)=>{
                return this.candidateService.getCandidate(action.payload).pipe(
                    map((candidate)=> new GetCandidateSuccess(candidate)),
                    catchError((err)=>of(new GetCandidateError(err)))
                )
            })
        )
    )
}