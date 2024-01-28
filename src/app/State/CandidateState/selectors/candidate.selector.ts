import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CandidateState } from "../reducers/candidate.reducer";


// Select the 'CandidateState' feature slice
export const selectCandidateState = createFeatureSelector<CandidateState>('CandidateState');

// Select the 'candidate' property from the 'CandidateState'
export const selectCandidates = createSelector(
  selectCandidateState,
  (state: CandidateState) => state.candidate
);
