import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-amr',
  templateUrl: './bud-amr.page.html',
  styleUrls: ['./bud-amr.page.scss'],
})
export class BudAmrPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
