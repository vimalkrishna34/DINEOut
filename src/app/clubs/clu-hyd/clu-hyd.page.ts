import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-hyd',
  templateUrl: './clu-hyd.page.html',
  styleUrls: ['./clu-hyd.page.scss'],
})
export class CluHydPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
