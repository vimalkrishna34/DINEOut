import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-mum',
  templateUrl: './pre-mum.page.html',
  styleUrls: ['./pre-mum.page.scss'],
})
export class PreMumPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
