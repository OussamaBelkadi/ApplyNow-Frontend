import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb :FormBuilder,private service:SocieteService,private route : Router){}
  myForm!:FormGroup;
  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]
    })

  }

  

  Submit(){
    if(this.myForm.valid){
      this.service.LoginCompany(this.myForm.value.email,this.myForm.value.password).subscribe((data)=>{
        console.log(data);
        console.log("loged in successfully");
        localStorage.setItem("societeid",data.id);
        this.route.navigate(['/dashboard/societe']);
      },(err)=>{
        console.log(err);
        console.log("cannot log in");
      });
      // console.log(this.myForm.value.email);

    }else{

      console.log("there is a problem ");

    }
  }



}
