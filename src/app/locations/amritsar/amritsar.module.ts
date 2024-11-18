import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmritsarPageRoutingModule } from './amritsar-routing.module';

import { AmritsarPage } from './amritsar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmritsarPageRoutingModule
  ],
  declarations: [AmritsarPage]
})
export class AmritsarPageModule {}
