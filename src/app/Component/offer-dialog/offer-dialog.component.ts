import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offers } from 'src/app/Model/offers';
import { OfferService } from 'src/app/Service/offer.service';

@Component({
  selector: 'app-offer-dialog',
  templateUrl: './offer-dialog.component.html',
  styleUrls: ['./offer-dialog.component.css']
})
export class OfferDialogComponent implements OnInit{

  constructor(private fb :FormBuilder,private service : OfferService) {}
  myForm!:FormGroup;

  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      profile: ['', [Validators.required]],
      niveau_etude: ['', [Validators.required]],
      salaire: ['', [Validators.required,  Validators.pattern(/^[1-9]\d*$/)]],

    });


    


  }

  Submit(){
    if(this.myForm.valid){
      const offer = new Offers();
      offer.offreDTO = this.myForm.value
      console.log(offer);
      this.service.insertOffer(offer).subscribe((data:any)=>{
        console.log(data);
      },(err)=>{
        console.log(err);
      });
    }else{
      console.log("form not valid");
    }

    console.log("hello");
  }
}
