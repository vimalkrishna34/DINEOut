import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-del',
  templateUrl: './bud-del.page.html',
  styleUrls: ['./bud-del.page.scss'],
})
export class BudDelPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
