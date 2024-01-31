import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { faSearch,faEye,faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { AgentService } from 'src/app/Service/agent.service';
import { DialogService } from 'src/app/Service/dialog.service';
import { OfferService } from 'src/app/Service/offer.service';
import * as OfferActions from '../../State/OfferState/Action/action';


import { Observable, map, pluck } from 'rxjs';
import { Candidate } from 'src/app/Model/candidate.model';
import { OfferState } from 'src/app/State/OfferState/Reducer/reducer';
import { CandidateState } from 'src/app/State/CandidateState/reducers/candidate.reducer';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})


export class OffreComponent implements OnInit {
  pagable!: {};
  offerState$:Observable<OfferState> | null=null;
  candidates$: Observable<any> | null=null;
  candidates: Candidate[] = [];
  candidateID!: number;
  userData!: Observable<any>;
  
  constructor(private service:OfferService ,private agentService : AgentService,private dialog : DialogService,private store : Store<any>) {
  
  }
  ngOnInit(): void {
  
    this.GetOffers();    
    this.pagable = {'page': this.pageIndex, 'size': this.pageSize}

    this.candidates$ = this.store.pipe(
      select('CandidateState'),
      map((candidateState: CandidateState) => candidateState.candidate),
      pluck('id')
    ); 
    this.candidates$.subscribe(id => {
      this.candidateID=id;
    });
        
    this.store.dispatch(new OfferActions.GetAllOffersAction(this.pagable))  
    this.offerState$ = this.store.pipe(
      map((state)=>  state.OfferState)
    );
   }
   
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  offer :any;
  pageSize = 10;
  pageIndex = 0;

  // Select the candidate feature state
  // getOffers(id : number = 1){
  //   this.service.fetchOffers(id).subscribe((data:any)=>{
  //     this.offer = data;
  //     console.log(this.offer);
  //   })
  // }

  

  nextPage(): void {
    this.pageIndex++;
    // this.loadCompetitions();
  }

  prevPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      // this.loadCompetitions();
    }
  }
  valide(id : number,status : String){

    console.log("id is " + id);
    console.log("status is " + status);
    this.agentService.valideOffer(id,status).subscribe((data : any)=> {
      
      console.log(data);

    } ,(err : any)=>{
      console.log(err);
    })

  }

 

  GetOffers() {

  this.agentService.GetOffers(this.pageIndex,this.pageSize).subscribe((data:any)=>{

        this.offer = data;

  },(err)=>console.log(err))

  }

  onPageChange(event : PageEvent){

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pagable = {'page': this.pageIndex, 'size': this.pageSize}
    this.GetOffers();
    this.store.dispatch(new OfferActions.GetAllOffersAction(this.pagable))
    this.offerState$ = this.store.pipe(
      map((state)=>  state.OfferState)
    );
    
  }

  openPostule(id : number, societeId: number, candidateId: number){

    console.log( "the id is societe " + societeId);
    this.dialog.openPostuleDialog(id, societeId, candidateId);
  
  }


}
