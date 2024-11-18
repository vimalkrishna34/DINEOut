import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-koch',
  templateUrl: './clu-koch.page.html',
  styleUrls: ['./clu-koch.page.scss'],
})
export class CluKochPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
