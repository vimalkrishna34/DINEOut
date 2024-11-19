import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  pageTitle: string = 'Dine Out';
  loginTitle: string = 'Login';
  emailPlaceholder: string = 'Enter your email';
  passwordPlaceholder: string = 'Enter your password';
  forgotPasswordLink: string = '#';
  signupLink: string = '#';
  signupText: string = "Don't have an account? Sign Up";
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
}
passwordType:string = 'password';

  constructor() {}

}

