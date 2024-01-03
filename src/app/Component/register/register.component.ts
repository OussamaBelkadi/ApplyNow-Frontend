import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Societe } from 'src/app/Model/societe';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private fb :FormBuilder,private service : SocieteService){

  }
  CompanyForm !:FormGroup; 
  ngOnInit(): void {

      this.CompanyForm = this.fb.group({

        titre: ['', Validators.required],
        phone: ['', Validators.required],
        imageFile: ['', Validators.required],
        adress: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]

      })



  }



  Submit(){

  if(this.CompanyForm.valid){

    const companydata = this.CompanyForm.value;
    console.log(companydata);
    this.service.RegisterCompany(companydata).subscribe((data : any)=>{
      console.log(data);
    },(err)=>{
      console.log(err);
    })


  }else{
    console.log("inputs arent valide");
  }

  }



}
