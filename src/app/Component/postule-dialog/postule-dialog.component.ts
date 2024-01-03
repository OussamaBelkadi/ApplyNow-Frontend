import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostuleService } from 'src/app/Service/postule.service';

@Component({
  selector: 'app-postule-dialog',
  templateUrl: './postule-dialog.component.html',
  styleUrls: ['./postule-dialog.component.css']
})
export class PostuleDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private fb :FormBuilder,private service: PostuleService){}
  
  form!:FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      nomComplet: [null, Validators.required],
      tel: [null, Validators.required],
      cv: [null, Validators.required],
      motivation: [null, Validators.required],
    });
  }


  offerId= this.data;
  
  submitForm(){
    console.log("postule submit ")
    if (this.form.valid) {
    
    const { offreId, nomComplet, tel, cv, motivation } = this.form.value;
    const formData = new FormData();
    
    formData.append('offreId', this.offerId);
    formData.append('nom_complet', nomComplet);
    formData.append('tel', tel);
    formData.append('cv', cv);
    formData.append('motivation', motivation);
    
    console.log(formData);
    this.service.Postuler(formData).subscribe((data : any)=>{
      console.log(data);
    },((err)=>{
      console.log(err);
    }))
    
    }else{
      console.log("data isnt valide");
    }  
  }

  onFileChange(event: Event, controlName: any) {

    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const file = target.files[0];
      this.form.get(controlName)?.setValue(file);
    }

  }

}
