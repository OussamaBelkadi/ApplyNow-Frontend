import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferDialogComponent } from '../Component/offer-dialog/offer-dialog.component';
import { CvDialogComponent } from '../Component/cv-dialog/cv-dialog.component';
import { PostuleDialogComponent } from '../Component/postule-dialog/postule-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openDialog():void{

    this.dialog.open(OfferDialogComponent, { 
      width :'600px',
      maxHeight:'90vh',
      
    })

  }


  openPdfDialog(pdfUrl : Blob){
    this.dialog.open(CvDialogComponent,{
      data: { pdfUrl },
      width: '80%',
      height: '80vh',
    });
  }

  openPostuleDialog( offerId : number, societeId: number,  candidateId: number ){
    this.dialog.open(PostuleDialogComponent,{

      data : { societeId, offerId , candidateId },
      width: '80%',
      height: '80vh',

    })
  }




}
