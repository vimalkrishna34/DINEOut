import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-hyd',
  templateUrl: './bud-hyd.page.html',
  styleUrls: ['./bud-hyd.page.scss'],
})
export class BudHydPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
