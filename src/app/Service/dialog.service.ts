import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OfferDialogComponent } from '../Component/offer-dialog/offer-dialog.component';
import { CvDialogComponent } from '../Component/cv-dialog/cv-dialog.component';
import { PostuleDialogComponent } from '../Component/postule-dialog/postule-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogRef : MatDialogRef<OfferDialogComponent> | undefined;
  constructor(private dialog:MatDialog) { }
  openDialog():void{

    this.dialogRef = this.dialog.open(OfferDialogComponent, { 
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

  closeDialog():void{
    this.dialogRef?.close();
  }


}
