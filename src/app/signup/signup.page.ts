import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  onSignup() {
    // Handle signup logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Redirect to login or home after signup
    this.router.navigate(['/login']);
  }
}
