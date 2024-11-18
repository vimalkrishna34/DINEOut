import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-amr',
  templateUrl: './pre-amr.page.html',
  styleUrls: ['./pre-amr.page.scss'],
})
export class PreAmrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}


