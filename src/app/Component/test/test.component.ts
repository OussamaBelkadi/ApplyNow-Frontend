import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { TestService } from 'src/app/Service/test.service';
import {Question} from 'src/app/Model/Question';
import {ResponseDto} from 'src/app/Model/ResponseDto';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit{
  email!: string;
  token!: string | null;
  questions: Question [] = [];
  questionForm!: FormGroup;
  score: number = 0;
  errorMessage!: string;
  answers : any;
  constructor(private service: TestService, private fb: FormBuilder){ }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    if (this.token !== null) {
      const tokenPayload = jwtDecode(this.token);
      console.log(tokenPayload.sub);
      this.fetchQuiz(tokenPayload.sub)   
    }
    
  }

  fetchQuiz(email: any): void {
    this.service.getQuestions(email).subscribe({
        next: (response) => {
          // Assuming response is an array of questions
          this.questions = response as Question[];
          this.initForm();
          console.log(this.questions);
        },
      error: (err: HttpErrorResponse) => {
        console.log('An error occurred:', err);
        console.log('Error message:', err.error);
        console.log('Status code:', err.status);
        console.log('Status text:', err.statusText);
        console.log('Request URL:', err.url);
  
        this.errorMessage = err.error;
      }
    })
  }
  
    initForm(): void {

      const answer: number[] = [] ; 
      const formControls: { [key: number]: any } = {} ; 
      const Ans: { [key: number]: any } = {} ; 
      
      this.questions.forEach(question => {
        formControls[question.id] = this.fb.control('');
        question.responseDtoList.forEach(response => {
          if(response.status === true){

            const qstid = response.id;
            Ans[question.id] = qstid;
            answer.push(response.id);
            
          }
        });
      });
      this.questionForm = this.fb.group(formControls);
      console.log(this.questionForm);
      console.log("-----------correct----------------");
      console.log( Ans);
      this.answers = Ans;
      console.log("-----------correct----------------");
 
    }

    submitQuiz(): void {


      // console.log(this.questionForm.value);
      if(this.questionForm.valid){
        console.log("-------------correct--------");
        console.log(this.answers);
        console.log("-------------correct--------");
        console.log("-------------coming--------");
        console.log(this.questionForm.value);
        console.log("-------------coming--------");
        const Ans: { [key: number]: any } = this.answers; 
        const Res: { [key: number]: any } = this.questionForm.value; 
        console.log('454' +  Ans[454])
        let correct :number =  10;
        for(const key in Ans){
          if(Ans[key] !== Res[key]  ){
            correct--;
          }
        }

        console.log(correct);
        
        



      }
      this.score = 0;

    }

}
