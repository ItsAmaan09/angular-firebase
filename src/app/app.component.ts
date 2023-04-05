import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-toastr aria-live="polite" aria-atomic="true"></app-toastr> 
  <router-outlet></router-outlet>
    `,
  styleUrls: []
})
export class AppComponent {
  title = 'myapp';
}
