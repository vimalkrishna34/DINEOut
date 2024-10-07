import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BengaluruPage } from './bengaluru.page';

const routes: Routes = [
  {
    path: '',
    component: BengaluruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BengaluruPageRoutingModule {}
