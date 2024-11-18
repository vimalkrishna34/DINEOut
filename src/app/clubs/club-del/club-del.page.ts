import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-del',
  templateUrl: './club-del.page.html',
  styleUrls: ['./club-del.page.scss'],
})
export class ClubDelPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
