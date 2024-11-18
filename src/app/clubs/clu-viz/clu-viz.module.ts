import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CluVizPageRoutingModule } from './clu-viz-routing.module';

import { CluVizPage } from './clu-viz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CluVizPageRoutingModule
  ],
  declarations: [CluVizPage]
})
export class CluVizPageModule {}
