import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostuleService } from 'src/app/Service/postule.service';
import { faSearch,faEye,faPenToSquare,faTrashCan, faFilePdf, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from 'src/app/Service/dialog.service';

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

  constructor(private service : PostuleService,private route: ActivatedRoute,private dialog : DialogService){}

  Postule : any;

  ngOnInit(): void {
    const offerid = this.route.snapshot.paramMap.get('offerid');

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


}
