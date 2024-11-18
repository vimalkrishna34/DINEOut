import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CluKochPageRoutingModule } from './clu-koch-routing.module';

import { CluKochPage } from './clu-koch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CluKochPageRoutingModule
  ],
  declarations: [CluKochPage]
})
export class CluKochPageModule {}
