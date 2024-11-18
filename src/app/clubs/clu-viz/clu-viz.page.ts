import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-viz',
  templateUrl: './clu-viz.page.html',
  styleUrls: ['./clu-viz.page.scss'],
})
export class CluVizPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
