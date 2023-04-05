import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  isTextFieldVisible: boolean;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // if (this.auth.currentUserValue) { this.router.navigate(['pages']) }
    if (this.auth.isLoggedIn()) { this.router.navigate(['pages']) }
  }

  login() {
    this.auth.login(this.email, this.password);
    // this.email = '';
    // this.password = '';
  }
  togglePasswordField() {
    this.isTextFieldVisible = !this.isTextFieldVisible;
  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
