import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetCandidate } from 'src/app/State/CandidateState/actions/cadidate.action';

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent implements OnInit{
  CandidateForm!: FormGroup;
  constructor(private Form:FormBuilder, private store: Store, private route: Router){
  }

  ngOnInit(): void {
    this.connect();
  }

  connect(){
    this.CandidateForm = this.Form.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      balance: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  Submit(){
    
    
    if(this.CandidateForm.valid){
      const candidate = this.CandidateForm.value;
      console.log(candidate);
      this.store.dispatch(new GetCandidate(candidate))
      this.route.navigate(["/candidate/login"])
    }
  }

}
