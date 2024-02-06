import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostuleService } from 'src/app/Service/postule.service';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-postule-dialog',
  templateUrl: './postule-dialog.component.html',
  styleUrls: ['./postule-dialog.component.css']
})

export class PostuleDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb :FormBuilder, private service: PostuleService, private toastr: ToastService){}
  
  offerId= this.data.offerId;
  candidateId = this.data.candidateId;
  societeId =this.data.societeId;

  form!:FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      nomComplet: [null, Validators.required],
      tel: [null, Validators.required],
      cv: [null, Validators.required],
      motivation: [null, Validators.required],
    });
  }



  
  submitForm(){
    
    
    if (this.form.valid) {
      const { cv, motivation } = this.form.value;
      console.log(this.candidateId + 'candidat ID '  );
      console.log(this.societeId + 'societe ID '  );
      console.log(this.offerId + 'offreID '  );
      console.log(cv);
      console.log(motivation);
    
    const formData = new FormData();
    
    formData.append('offreId', this.offerId);
    formData.append('cv', cv);
    formData.append('motivation', motivation);
    formData.append('id', this.societeId);
    formData.append('candidateId', this.candidateId)
    formData.append('balance', '100');
    
    console.log(formData);

    this.service.Postuler(formData).subscribe((data : any)=>{
      console.log(data);
      this.toastr.success('PAYMENT REALISED')
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
