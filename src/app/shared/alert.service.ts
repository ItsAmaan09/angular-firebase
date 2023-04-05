import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  toasts: any[] = [];
  constructor(private modalService: NgbModal) { }

  show(header: string, body: string, options: any = {}) {
    this.toasts.push({ header, body, options });
  }

  showSuceesToast(header: string, body: string) {
    var options = { classname: 'bg-success text-light', delay: 2000 };
    this.toasts.push({ header, body, options });
  }

  showWarningToast(header: string, body: string) {
    var options = { classname: 'bg-danger text-light', delay: 2000 };
    this.toasts.push({ header, body, options });
  }
}
