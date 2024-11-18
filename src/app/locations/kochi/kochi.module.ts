import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KochiPageRoutingModule } from './kochi-routing.module';

import { KochiPage } from './kochi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KochiPageRoutingModule
  ],
  declarations: [KochiPage]
})
export class KochiPageModule {}
