import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private fireauth: AngularFireAuth, private router: Router,
    private alertService: AlertService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token') as any));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Login Method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true')
      this.alertService.showSuceesToast('Success', 'login Successfully');
      this.router.navigate(['./pages']);
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
      this.router.navigate(['./login']);
      this.alertService.showSuceesToast('Success', 'Logout Successfully');
    }, err => {
      console.log(err.message);
      this.alertService.showWarningToast('Warning', err.message);
    })
  }


  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken();
  }
}
