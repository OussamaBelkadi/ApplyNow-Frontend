import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetCandidate } from 'src/app/State/CandidateState/actions/cadidate.action';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit{
  CandidateForm!: FormGroup;

  constructor(private store: Store, private Form: FormBuilder){}

  ngOnInit(): void {
      this.connect();
  }

  connect(){
    this.CandidateForm = this.Form.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  Submit(){
     
    if(this.CandidateForm.valid){
      const candidate = this.CandidateForm.value;
      console.log(candidate);
      this.store.dispatch(new GetCandidate(candidate))
    }
  }

}
