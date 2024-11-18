import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-koch',
  templateUrl: './pre-koch.page.html',
  styleUrls: ['./pre-koch.page.scss'],
})
export class PreKochPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
