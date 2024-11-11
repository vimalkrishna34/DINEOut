import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreAmrPageRoutingModule } from './pre-amr-routing.module';

import { PreAmrPage } from './pre-amr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreAmrPageRoutingModule
  ],
  declarations: [PreAmrPage]
})
export class PreAmrPageModule {}
