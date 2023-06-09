import { Component, OnInit, TemplateRef } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-toastr',
  template: `
  <ngb-toast class=' mb-2' *ngFor="let toast of alertService.toasts"
    [autohide]="true" [delay]=" toast.options.delay || 8000"
     [class]="toast.options.classname" >
    <!-- bg-success & bg-warning 
  (hidden)="remove(toast)" [header]="toast.header" -->
    {{toast.body}}`,
  // styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  constructor(public alertService: AlertService) { }
  ngOnInit(): void {

  }
  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

  // remove(toast: any) {
  //   this.alertService.toasts = this.alertService.toasts.filter(t => t !== toast);
  // }
}
