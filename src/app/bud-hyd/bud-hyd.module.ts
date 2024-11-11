import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudHydPageRoutingModule } from './bud-hyd-routing.module';

import { BudHydPage } from './bud-hyd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudHydPageRoutingModule
  ],
  declarations: [BudHydPage]
})
export class BudHydPageModule {}
