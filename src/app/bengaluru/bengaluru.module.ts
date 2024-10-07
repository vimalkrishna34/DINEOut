import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BengaluruPageRoutingModule } from './bengaluru-routing.module';

import { BengaluruPage } from './bengaluru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BengaluruPageRoutingModule
  ],
  declarations: [BengaluruPage]
})
export class BengaluruPageModule {}
