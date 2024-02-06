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
  SocieteForm : boolean = false;
  CandidatForm : boolean = true;
  ngOnInit(): void {

      this.CompanyForm = this.fb.group({

        userName: ['', Validators.required],
        phone: ['', Validators.required],
        imageFile: ['null'],
        adresse: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        roles:['', Validators.required]

      })



  }



  Submit(){
    if(this.CompanyForm.valid){
      console.log(this.CompanyForm.value);

      const  {userName,phone,imageFile,adresse,email,password,roles} = this.CompanyForm.value;
      const formData = new FormData();
      formData.append("userName",userName);
      formData.append("phone",phone);
      formData.append("imageFile",imageFile);
      formData.append("adresse",adresse);
      formData.append("password",password);
      formData.append("email",email);
      formData.append("roles",roles);
      console.log(formData);

      this.service.RegisterCompany(formData).subscribe((data : any)=>{

        console.log(data);
      },(err)=>{
        console.log(err);
      })


    }else{
      console.log("inputs arent valide");
    }

  }

  showCompany(){
    this.SocieteForm = false;
  }
  showSocieteForm(){
    this.SocieteForm = false;
  }

  onFileChange(ev : Event){

    const target = ev.target as HTMLInputElement;
    if(target && target.files && target.files.length > 0){
      const file = target.files[0];
      this.CompanyForm.get('imageFile')?.setValue(file);
    }

  }

}
