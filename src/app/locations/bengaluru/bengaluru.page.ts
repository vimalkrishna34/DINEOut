import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bengaluru',
  templateUrl: './bengaluru.page.html',
  styleUrls: ['./bengaluru.page.scss'],
})
export class BengaluruPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/pre-viz']);
  }
  navigateToBooking1() {
    this.router.navigate(['/bud-viz']);
  }
  navigateToBooking2() {
    this.router.navigate(['/clu-viz']);
  }


  goBack() {
    this.router.navigate(['/home']);
  }

}
