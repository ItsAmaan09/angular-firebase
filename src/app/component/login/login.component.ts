import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    (this.email == '') ? alert('Please enter email') : '';
    (this.password == '') ? alert('Please enter password') : '';
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  togglePasswordField() {
    this.isTextFieldVisible = !this.isTextFieldVisible;
  }
}
