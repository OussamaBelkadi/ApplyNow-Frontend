import { Component } from '@angular/core';
import { faSearch,faEye,faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;
}
