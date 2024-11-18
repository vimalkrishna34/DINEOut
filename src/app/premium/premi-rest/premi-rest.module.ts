import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiRestPageRoutingModule } from './premi-rest-routing.module';

import { PremiRestPage } from './premi-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiRestPageRoutingModule
  ],
  declarations: [PremiRestPage]
})
export class PremiRestPageModule {}
