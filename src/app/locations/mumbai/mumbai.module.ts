import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MumbaiPageRoutingModule } from './mumbai-routing.module';

import { MumbaiPage } from './mumbai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MumbaiPageRoutingModule
  ],
  declarations: [MumbaiPage]
})
export class MumbaiPageModule {}
