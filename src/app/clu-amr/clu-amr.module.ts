import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CluAmrPageRoutingModule } from './clu-amr-routing.module';

import { CluAmrPage } from './clu-amr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CluAmrPageRoutingModule
  ],
  declarations: [CluAmrPage]
})
export class CluAmrPageModule {}
