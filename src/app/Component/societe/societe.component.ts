import { Component } from '@angular/core';
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent {

  flocation = faLocationDot;
  fphone = faPhone;
  femail = faEnvelope;


}
