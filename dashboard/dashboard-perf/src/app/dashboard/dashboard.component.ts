import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `<div>{{ result }}</div>`,
})
export class DashboardComponent implements OnInit {
  result: number | string | null = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    if (typeof Worker !== "undefined") {
      // Create a new Web Worker instance
      const worker = new Worker(new URL("./heavy.worker", import.meta.url), {
        type: "module",
      });
      worker.onmessage = ({ data }) => {
        // Use NgZone to ensure the result is updated in the Angular zone
        this.ngZone.run(() => {
          this.result = `Sum: ${data.sum}, Duration: ${data.durationMs.toFixed(2)} ms`;
        });
      };
      // Post a message to the worker to start the computation
      worker.postMessage(null);
    } else {
      console.warn("Web Workers are not supported in this environment.");
    }
  }
}
