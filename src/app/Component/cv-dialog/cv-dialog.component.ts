import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-dialog',
  templateUrl: './cv-dialog.component.html',
  styleUrls: ['./cv-dialog.component.css']
})
export class CvDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { pdfUrl: Blob },private sanitizer: DomSanitizer) {}

  getSafePdfUrl(): SafeUrl {
    const pdfDataUrl = URL.createObjectURL(this.data.pdfUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfDataUrl);
  }

}
