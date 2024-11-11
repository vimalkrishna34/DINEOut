import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-amr',
  templateUrl: './clu-amr.page.html',
  styleUrls: ['./clu-amr.page.scss'],
})
export class CluAmrPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
