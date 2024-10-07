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
}
