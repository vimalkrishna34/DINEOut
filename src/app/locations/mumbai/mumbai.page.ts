import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.page.html',
  styleUrls: ['./mumbai.page.scss'],
})
export class MumbaiPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/pre-mum']);
  }
  navigateToBooking1() {
    this.router.navigate(['/bud-mum']);
  }
  navigateToBooking2() {
    this.router.navigate(['/clu-mum']);
  }


  goBack() {
    this.router.navigate(['/home']);
  }


}
