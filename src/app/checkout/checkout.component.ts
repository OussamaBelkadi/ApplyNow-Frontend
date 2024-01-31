import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../enviroment/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 99900,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;

    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        stripe?.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
}
