import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudDelPageRoutingModule } from './bud-del-routing.module';

import { BudDelPage } from './bud-del.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudDelPageRoutingModule
  ],
  declarations: [BudDelPage]
})
export class BudDelPageModule {}
