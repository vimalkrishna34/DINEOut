import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CluHydPageRoutingModule } from './clu-hyd-routing.module';

import { CluHydPage } from './clu-hyd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CluHydPageRoutingModule
  ],
  declarations: [CluHydPage]
})
export class CluHydPageModule {}
