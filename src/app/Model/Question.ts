import { ResponseDto } from "./ResponseDto";

export interface Question {
    specialityID: number;
    id: number;
    qst: string;
    responseDtoList: ResponseDto[];
  }
  