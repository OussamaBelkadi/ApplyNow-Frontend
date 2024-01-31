import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Offers } from 'src/app/Model/offers';
import { OfferService } from 'src/app/Service/offer.service';
import { AppStateInterface } from 'src/app/State/OfferState/AppStateInterface';
import * as OfferAction from 'src/app/State/OfferState/Action/action';
import { Observable } from 'rxjs';
import { errorSelector } from 'src/app/State/OfferState/Selector/selector';
import { DialogService } from 'src/app/Service/dialog.service';
@Component({
  selector: 'app-offer-dialog',
  templateUrl: './offer-dialog.component.html',
  styleUrls: ['./offer-dialog.component.css']
})
export class OfferDialogComponent implements OnInit{

  constructor(private fb :FormBuilder,private service : OfferService,private store : Store<AppStateInterface>,private dialog:DialogService) {
    this.error = this.store.pipe(select(errorSelector));
  }
  myForm!:FormGroup;
  error : Observable<String | null> | undefined;


  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      profile: ['', [Validators.required]],
      niveau_etude: ['', [Validators.required]],
      salaire: ['', [Validators.required,  Validators.pattern(/^[1-9]\d*$/)]],

    });


    


  }

  // Submit(){
  //   if(this.myForm.valid){
  //     const offer = new Offers();
  //     offer.offreDTO = this.myForm.value
  //     console.log(offer);
  //     this.service.insertOffer(offer).subscribe((data:any)=>{
  //       console.log(data);
  //     },(err)=>{
  //       console.log(err);
  //     });
  //   }else{
  //     console.log("form not valid");
  //   }

  //   console.log("hello");
  // }

  Submit(){

    if(this.myForm.valid){
      const offer = new Offers();
      offer.offreDTO = this.myForm.value
      offer.societeId = localStorage.getItem("societeid");
      this.store.dispatch(OfferAction.AddAnOffer(offer));
      setTimeout(()=>{
        this.dialog.closeDialog();
      },2000)
      
    }else{
      console.log("form not valid");
    }

  }


}
