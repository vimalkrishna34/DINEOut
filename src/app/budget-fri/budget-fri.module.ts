import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetFriPageRoutingModule } from './budget-fri-routing.module';

import { BudgetFriPage } from './budget-fri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetFriPageRoutingModule
  ],
  declarations: [BudgetFriPage]
})
export class BudgetFriPageModule {}
