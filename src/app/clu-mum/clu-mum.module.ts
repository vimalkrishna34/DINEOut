import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CluMumPageRoutingModule } from './clu-mum-routing.module';

import { CluMumPage } from './clu-mum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CluMumPageRoutingModule
  ],
  declarations: [CluMumPage]
})
export class CluMumPageModule {}
