import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { faSearch,faEye,faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Offers } from 'src/app/Model/offers';
import { AgentService } from 'src/app/Service/agent.service';
import { DialogService } from 'src/app/Service/dialog.service';
import { OfferService } from 'src/app/Service/offer.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  ngOnInit(): void {
    this.GetOffers();
  }
  constructor(private service:OfferService ,private agentService : AgentService,private dialog : DialogService) {}
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  offer :any;
  pageSize = 10;
  pageIndex = 0;

  // getOffers(id : number = 1){
  //   this.service.fetchOffers(id).subscribe((data:any)=>{
  //     this.offer = data;
  //     console.log(this.offer);
  //   })
  // }

  valide(id : number,status : String){

    console.log("id is " + id);
    console.log("status is " + status);
    this.agentService.valideOffer(id,status).subscribe((data : any)=> {
      
      console.log(data);

    } ,(err : any)=>{
      console.log(err);
    })

  }

 

  GetOffers(){

  this.agentService.GetOffers(this.pageIndex,this.pageSize).subscribe((data:any)=>{
    
    console.log(data);
    this.offer = data;

  },(err)=>console.log(err))

  }

  onPageChange(event : PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
   
    this.GetOffers();

    console.log("ggg");
    
  }

  openPostule(id : number){

    console.log( "the id is " + id);
    this.dialog.openPostuleDialog(id);
  
  }


}
