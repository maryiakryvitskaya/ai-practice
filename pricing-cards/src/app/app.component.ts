import { Component } from '@angular/core';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PricingCardComponent],
  template: `
    <div
      class="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 space-y-6 sm:flex-row sm:space-y-0"
    >
      <app-pricing-card
        plan="Standard"
        price="100"
        [features]="[
          '50,000 Requests',
          '4 contributors',
          'Up to 3 GB storage space',
        ]"
      />
      <app-pricing-card
        plan="Pro"
        price="200"
        [features]="[
          '100,000 Requests',
          '7 contributors',
          'Up to 6 GB storage space',
        ]"
        [isFeatured]="true"
      />
      <app-pricing-card
        plan="Expert"
        price="500"
        [features]="[
          '200,000 Requests',
          '11 contributors',
          'Up to 10 GB storage space',
        ]"
      />
    </div>
  `,
})
export class AppComponent {}
