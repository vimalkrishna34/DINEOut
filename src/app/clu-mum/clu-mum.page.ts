import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-mum',
  templateUrl: './clu-mum.page.html',
  styleUrls: ['./clu-mum.page.scss'],
})
export class CluMumPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
