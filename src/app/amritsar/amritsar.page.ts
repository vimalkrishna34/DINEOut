import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amritsar',
  templateUrl: './amritsar.page.html',
  styleUrls: ['./amritsar.page.scss'],
})
export class AmritsarPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/pre-amr']);
  }
  navigateToBooking1() {
    this.router.navigate(['/bud-amr']);
  }
  navigateToBooking2() {
    this.router.navigate(['/clu-amr']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
