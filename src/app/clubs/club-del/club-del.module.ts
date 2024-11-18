import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubDelPageRoutingModule } from './club-del-routing.module';

import { ClubDelPage } from './club-del.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubDelPageRoutingModule
  ],
  declarations: [ClubDelPage]
})
export class ClubDelPageModule {}
