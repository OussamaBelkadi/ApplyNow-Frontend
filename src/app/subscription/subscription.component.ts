import { Component } from '@angular/core';
import { environment } from '../enviroment/environment';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  monthlyPriceId = 'Add_your_mothly_price_here';
  yearlyPriceId = 'Add_your_yearly_price_here';

  // load the stripejs
  stripePromise = loadStripe(environment.stripe);

  constructor(private http: HttpClient) {}

  async checkoutMonthly(): Promise<void> {
    this.checkout(this.monthlyPriceId);
  }

  async checkoutYearly(): Promise<void> {
    this.checkout(this.yearlyPriceId);
  }

  /**
   * this method do the checkout for a priceId and it is async because it awaiting the Promise object
   */
  private async checkout(priceId: string): Promise<void> {
    const checkout = {
      priceId: priceId,
      cancelUrl: 'http://localhost:4200/canceled',
      successUrl: 'http://localhost:4200/success',
    };
    const stripe = await this.stripePromise;
    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/subscription`, checkout)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe?.redirectToCheckout({
          sessionId: data.sessionId,
        });
      });
  }
}
