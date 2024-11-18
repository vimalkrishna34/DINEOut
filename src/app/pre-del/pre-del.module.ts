import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreDelPageRoutingModule } from './pre-del-routing.module';

import { PreDelPage } from './pre-del.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreDelPageRoutingModule
  ],
  declarations: [PreDelPage]
})
export class PreDelPageModule {}
