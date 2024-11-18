import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudAmrPageRoutingModule } from './bud-amr-routing.module';

import { BudAmrPage } from './bud-amr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudAmrPageRoutingModule
  ],
  declarations: [BudAmrPage]
})
export class BudAmrPageModule {}
