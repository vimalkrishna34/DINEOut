import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreVizPageRoutingModule } from './pre-viz-routing.module';

import { PreVizPage } from './pre-viz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreVizPageRoutingModule
  ],
  declarations: [PreVizPage]
})
export class PreVizPageModule {}
