import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { TestService } from 'src/app/Service/test.service';

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

  constructor(private service: TestService, private fb: FormBuilder){}

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
      const formControls: { [key: number]: any } = {}; 
      this.questions.forEach(question => {
        question.responseDtoList.forEach(response => {
          formControls[response.id] = this.fb.control(false);
        });
      });
      this.questionForm = this.fb.group(formControls);
    }

    submitQuiz(): void {
      this.score = 0;

    }

}
