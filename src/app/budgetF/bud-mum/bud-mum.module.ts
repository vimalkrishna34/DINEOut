import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudMumPageRoutingModule } from './bud-mum-routing.module';

import { BudMumPage } from './bud-mum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudMumPageRoutingModule
  ],
  declarations: [BudMumPage]
})
export class BudMumPageModule {}
