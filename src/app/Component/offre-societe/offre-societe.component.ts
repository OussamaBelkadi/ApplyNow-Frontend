import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Service/offer.service';
import { faSearch,faEye,faPenToSquare,faTrashCan,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';

@Component({
  selector: 'app-offre-societe',
  templateUrl: './offre-societe.component.html',
  styleUrls: ['./offre-societe.component.css']
})
export class OffreSocieteComponent implements OnInit{
  ngOnInit(): void {
    console.log("hello");
    this.getOffers();
  }
  constructor(private service:OfferService,private dialog : DialogService) { }

  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  fplus = faCirclePlus;
  offer :any;

  getOffers(id : number = 1){
    this.service.fetchOffers(id).subscribe((data:any)=>{
      this.offer = data;
      console.log(this.offer);
    })
  }

  fetchPostules(id : number){

    this.service.fetchOffers(id).subscribe((data : any)=>{
      console.log(data);
    })

  }

  DialogAddOffer(){
    this.dialog.openDialog();
  }


}
