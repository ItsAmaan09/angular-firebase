import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router,
    private alertService: AlertService) { }



  // Login Method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true')
      this.alertService.showSuceesToast('Success', 'login Successfully');
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err.message);
      this.alertService.showWarningToast('Warning', err);
      this.router.navigate(['/login']);
    })
  }

  //Register Method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      this.alertService.showSuceesToast('Success', 'Registration Successfully');
      this.router.navigate(['/login']);
    }, err => {
      console.log(err.message);
      this.alertService.showWarningToast('Warning', err.message);
      this.router.navigate(['/register']);
    })
  }

  //Logout Method
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.alertService.showSuceesToast('Success', 'Logout Successfully');
    }, err => {
      console.log(err.message);
      this.alertService.showWarningToast('Warning', err.message);
    })
  }
}
