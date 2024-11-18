import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-koch',
  templateUrl: './bud-koch.page.html',
  styleUrls: ['./bud-koch.page.scss'],
})
export class BudKochPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
