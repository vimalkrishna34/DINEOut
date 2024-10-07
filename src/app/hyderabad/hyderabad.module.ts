import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HyderabadPageRoutingModule } from './hyderabad-routing.module';

import { HyderabadPage } from './hyderabad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HyderabadPageRoutingModule
  ],
  declarations: [HyderabadPage]
})
export class HyderabadPageModule {}
