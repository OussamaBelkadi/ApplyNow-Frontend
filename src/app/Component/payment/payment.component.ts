import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/app/enviroment/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient,private route : Router) {}

  async pay(amount:number, status:string): Promise<void> {
    const payment = {
      societe_id: 1,
      currency: 'usd',
      amount: amount,
      status: status,
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;

    this.http
      .post('http://localhost:8000/api/payment', payment, {responseType: 'text'})
      .subscribe((data: any) => {
        this.route.navigate(['/dashboard/societe']);

      });
  }


}
