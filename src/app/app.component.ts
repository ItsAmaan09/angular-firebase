import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
    <app-toastr></app-toastr> 
    `,
  styleUrls: []
})
export class AppComponent {
  title = 'myapp';
}
