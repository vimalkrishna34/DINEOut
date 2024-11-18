import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-del',
  templateUrl: './pre-del.page.html',
  styleUrls: ['./pre-del.page.scss'],
})
export class PreDelPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  goBack() {
    this.router.navigate(['/home']);
  }
}
