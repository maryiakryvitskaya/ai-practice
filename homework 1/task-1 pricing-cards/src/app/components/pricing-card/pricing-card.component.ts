import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [NgClass, NgFor],
  template: `
    <div
      class="w-full max-w-sm rounded-none transition-all duration-300
             focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500
             hover:shadow-2xl hover:scale-105 sm:w-full md:w-80
             overflow-auto flex flex-col mt-12 mb-12"
      [ngClass]="{
        'bg-slate-800 text-white z-10 h-[550px] max-h-[640px]': isFeatured,
        'bg-white text-gray-800 h-[500px] max-h-[640px]': !isFeatured
      }"
      tabindex="0"
    >
      <div class="flex flex-col flex-1 justify-between h-full p-8">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-0">{{ plan }}</h3>
          <p class="text-6xl font-extrabold mt-0 mb-0"><span class="mr-1">$</span>{{ price }}</p>
        </div>
        <ul class="flex-1 my-6 bg-transparent">
          <li
            *ngFor="let feature of features; let i = index"
            class="py-3 text-sm text-center border-b border-gray-300"
            [ngClass]="{ 'border-t': i === 0 }"
          >
            {{ feature }}
          </li>
        </ul>
        <button
          class="mt-4 inline-block w-full rounded-md bg-transparent py-2 text-sm font-semibold uppercase tracking-wide hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current cursor-pointer border-0"
        >
          Subscribe
        </button>
      </div>
    </div>
  `,
})
export class PricingCardComponent {
  @Input() plan!: string;
  @Input() price!: string;
  @Input() features!: string[];
  @Input() isFeatured?: boolean = false;
}
