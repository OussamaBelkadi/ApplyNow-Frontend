import { ResponseDto } from "./ResponseDto";

export interface Question {
    specialityID: number;
    id: number;
    qst: string;
    responseDtoList: ResponseDto[];
  }
  
  export interface RegisterTestDto{
    questionList: Question[],
    testId:number,
    candidateId : number,
  }

  export interface ValidateTest{
    testId: number,
    candidateId: number,
    score: number
  }