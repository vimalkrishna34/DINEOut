import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreMumPageRoutingModule } from './pre-mum-routing.module';

import { PreMumPage } from './pre-mum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreMumPageRoutingModule
  ],
  declarations: [PreMumPage]
})
export class PreMumPageModule {}
