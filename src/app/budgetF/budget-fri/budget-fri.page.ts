import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-fri',
  templateUrl: './budget-fri.page.html',
  styleUrls: ['./budget-fri.page.scss'],
})
export class BudgetFriPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/booking']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
