import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-del',
  templateUrl: './bud-del.page.html',
  styleUrls: ['./bud-del.page.scss'],
})
export class BudDelPage implements OnInit {
  restaurants = [
    {
      name: 'Big Yellow Door',
      location: 'Delhi',
      description: 'Affordable Restaurant',
      image: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660374424/ylgm8u3lzmm1gxnhasie.jpg',
      rating: '5.0',
      price: '₹450 for 2',
    },
    {
      name: 'Out of the Box',
      location: 'Delhi',
      description: 'Best food at an affordable price',
      image: 'https://b.zmtcdn.com/data/pictures/7/7227/29b12496e47001375afb6ccdf26ef603.jpg',
      rating: '4.0',
      price: '₹500 for 2',
      isFeatured: true,
    },
    {
      name: 'Kake Di Hatti',
      location: 'Delhi',
      description: 'Amazing food and service',
      image: 'https://b.zmtcdn.com/data/pictures/chains/7/6677/f7299e192e0eb543b293728fa8ad16f4_featured_v2.jpg',
      rating: '4.5',
      price: '₹400 for 2',
    },
    {
      name: 'QD',
      location: 'Delhi',
      description: 'Customer service is amazing',
      image: 'https://b.zmtcdn.com/data/pictures/7/20431907/ee385168d664fdc845f6944ab85c8cfb.jpg',
      rating: '4.2',
      price: '₹650 for 2',
      isFeatured: true,
    },
    {
      name: 'Sandoz Restaurant',
      location: 'Delhi',
      description: 'Can have quality time here',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqubGEHRNt2Hx_vdCShUKCd2NionUhnB2clw&s',
      rating: '3.8',
      price: '₹500 for 2',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
