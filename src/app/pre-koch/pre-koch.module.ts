import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreKochPageRoutingModule } from './pre-koch-routing.module';

import { PreKochPage } from './pre-koch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreKochPageRoutingModule
  ],
  declarations: [PreKochPage]
})
export class PreKochPageModule {}
