import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.page.html',
  styleUrls: ['./hyderabad.page.scss'],
})
export class HyderabadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/booking']);
  }
  navigateToBooking1() {
    this.router.navigate(['/bud-hyd']);
  } 
  navigateToBooking2() {
    this.router.navigate(['/clu-hyd']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
