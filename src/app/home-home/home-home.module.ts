import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHomePageRoutingModule } from './home-home-routing.module';

import { HomeHomePage } from './home-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHomePageRoutingModule
  ],
  declarations: [HomeHomePage]
})
export class HomeHomePageModule {}
