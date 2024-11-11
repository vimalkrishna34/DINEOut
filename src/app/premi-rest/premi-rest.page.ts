import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premi-rest',
  templateUrl: './premi-rest.page.html',
  styleUrls: ['./premi-rest.page.scss'],
})
export class PremiRestPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
