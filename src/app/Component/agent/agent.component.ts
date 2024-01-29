import { Component, OnInit } from '@angular/core';
import { faSearch,faEye,faPenToSquare,faTrashCan,faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { AgentService } from 'src/app/Service/agent.service';
import { OfferService } from 'src/app/Service/offer.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { DialogService } from 'src/app/Service/dialog.service';
import * as OfferActions from '../../State/OfferState/Action/action';
import { Store, select } from '@ngrx/store';
import { Offers } from 'src/app/Model/offers';
import { AppStateInterface } from 'src/app/State/OfferState/AppStateInterface';
import { Observable, switchMap, take } from 'rxjs';
import { OffersSelector, errorSelector } from 'src/app/State/OfferState/Selector/selector';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  ListOffers : Observable<Offers[]>;
  error : Observable<String | null> | undefined;


  constructor(private store : Store<AppStateInterface>,private service:OfferService ,private agentService : AgentService,private dialog : DialogService) {
    this.ListOffers = this.store.pipe(select(OffersSelector));

  }

  ngOnInit(): void {

    this.GetOffers();
    this.store.dispatch(OfferActions.getAllOffersAdmin({page : this.pageIndex,size:this.pageSize}));
    this.ListOffers.subscribe(offers => {
      this.offer$ = offers;
  });

  }
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  faccept = faCircleCheck;
  frefuse = faCircleXmark;
  offer :any;
  offer$ :any;
  pageSize = 10;
  pageIndex = 0;

  // getOffers(id : number = 1){
  //   this.service.fetchOffers(id).subscribe((data:any)=>{
  //     this.offer = data;
  //     console.log(this.offer);
  //   })
  // }

  valide(id : number,status : String) {

    this.store.dispatch(OfferActions.ValideOffre({idoffer:id,status:status}));
    this.store.pipe(select(errorSelector),
    switchMap(async () => this.store.dispatch(OfferActions.getAllOffersAdmin({ page: this.pageIndex, size: this.pageSize })))
    ).subscribe();
    

  }

 

  GetOffers(){

  this.agentService.GetOffers(this.pageIndex,this.pageSize).subscribe((data:any)=>{
  
    console.log(data);
    this.offer = data;

  },(err)=>console.log(err))

  }

  onPageChange(event : PageEvent) {

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
   
    // this.GetOffers();
    this.store.dispatch(OfferActions.getAllOffersAdmin({page : this.pageIndex,size:this.pageSize}));
    
    console.log("ggg");

  }

  openPostule(id : number){

    console.log( "the id is " + id);
    this.dialog.openPostuleDialog(id);

  }



}
