import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-viz',
  templateUrl: './bud-viz.page.html',
  styleUrls: ['./bud-viz.page.scss'],
})
export class BudVizPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
