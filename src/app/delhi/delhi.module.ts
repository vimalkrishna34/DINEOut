import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelhiPageRoutingModule } from './delhi-routing.module';

import { DelhiPage } from './delhi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelhiPageRoutingModule
  ],
  declarations: [DelhiPage]
})
export class DelhiPageModule {}
