import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudKochPageRoutingModule } from './bud-koch-routing.module';

import { BudKochPage } from './bud-koch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudKochPageRoutingModule
  ],
  declarations: [BudKochPage]
})
export class BudKochPageModule {}
