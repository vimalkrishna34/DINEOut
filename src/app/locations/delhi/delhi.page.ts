import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.page.html',
  styleUrls: ['./delhi.page.scss'],
})
export class DelhiPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/pre-del']);
  }
  navigateToBooking1() {
    this.router.navigate(['/club-del']);
  }

  navigateToBooking2() {
    this.router.navigate(['/bud-del']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
