import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kochi',
  templateUrl: './kochi.page.html',
  styleUrls: ['./kochi.page.scss'],
})
export class KochiPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/pre-koch']);
  }
  navigateToBooking1() {
    this.router.navigate(['/clu-koch']);
  }
  navigateToBooking2() {
    this.router.navigate(['/bud-koch']);
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
