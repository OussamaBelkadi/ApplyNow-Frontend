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
  notif:boolean=false;

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

      console.log(this.myForm.value);
      this.service.LoginCompany(this.myForm.value.email,this.myForm.value.password).subscribe((data)=>{
        console.log(data);
        localStorage.setItem("token",data.token);
        if (data.role === '[Role_Societe]') {
          this.route.navigate(['/dashboard/societe']);
        } else if (data.role === '[Role_Candidate]') {
          localStorage.setItem("id",data.id);
          this.route.navigate(['/offer']);
        } else {
          this.route.navigate(['/agent']);
        }
        this.notif = false;
      },(err)=>{
        console.log(err);
        console.log("cannot log in");
        this.notif = true;
      });
      // console.log(this.myForm.value.email);

    }else{

      console.log("there is a problem ");

    }
  }



}
