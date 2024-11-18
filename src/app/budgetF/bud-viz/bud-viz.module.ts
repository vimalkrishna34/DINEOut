import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudVizPageRoutingModule } from './bud-viz-routing.module';

import { BudVizPage } from './bud-viz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudVizPageRoutingModule
  ],
  declarations: [BudVizPage]
})
export class BudVizPageModule {}
