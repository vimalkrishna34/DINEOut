import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-mum',
  templateUrl: './bud-mum.page.html',
  styleUrls: ['./bud-mum.page.scss'],
})
export class BudMumPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
