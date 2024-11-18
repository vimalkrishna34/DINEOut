import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-viz',
  templateUrl: './pre-viz.page.html',
  styleUrls: ['./pre-viz.page.scss'],
})
export class PreVizPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
