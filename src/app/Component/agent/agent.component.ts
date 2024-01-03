import { Component, OnInit } from '@angular/core';
import { faSearch,faEye,faPenToSquare,faTrashCan,faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { AgentService } from 'src/app/Service/agent.service';
import { OfferService } from 'src/app/Service/offer.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { DialogService } from 'src/app/Service/dialog.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  ngOnInit(): void {
    this.GetOffers();
  }
  constructor(private service:OfferService ,private agentService : AgentService,private dialog : DialogService) {}
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  faccept = faCircleCheck;
  frefuse = faCircleXmark;
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
