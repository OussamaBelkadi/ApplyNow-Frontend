import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostuleService } from 'src/app/Service/postule.service';
import { faSearch,faEye,faPenToSquare,faTrashCan, faFilePdf, faFileLines,faCircleXmark,faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-postule',
  templateUrl: './postule.component.html',
  styleUrls: ['./postule.component.css']
})
export class PostuleComponent implements OnInit {

  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
  offer :any;
  fpdf  = faFilePdf;
  ffile = faFileLines;
  faccept = faCircleCheck;
  frefuse = faCircleXmark;
  statistics : any;
  constructor(private service : PostuleService,private route: ActivatedRoute,private dialog : DialogService,private Sservice :SocieteService){}

  Postule : any;

  ngOnInit(): void {
    
    const offerid = this.route.snapshot.paramMap.get('offerid');
    this.route.params.subscribe(params => {
      const id = params['offerid'];
      this.Statistics(id);
      console.log(id);
    });
    console.log("here is postules list");
    this.fetchPostules(offerid);
    
  }

  OpenCv(Path : any){

    this.service.fetchCv(Path).subscribe((data : Blob)=>{
      this.dialog.openPdfDialog(data);
        console.log(data);
    });
  }


  fetchPostules(id : any){
    
    this.service.fetchPostules(id).subscribe((data:any)=>{
        this.Postule = data;
        console.log(data);
    });

  }


  accepterPostule(id : any){
    this.Sservice.approuveCandidate(id,"ACCEPTED").subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }
  
  refuserPostule(id:number){
    this.Sservice.approuveCandidate(id,"REJECTED").subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }

  Statistics(id : number){

    this.service.PostuleStaistics(id).subscribe((data)=>{
      this.statistics = data;
      console.log(data);
    })

  }



}
