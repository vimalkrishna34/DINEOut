import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MumbaiPage } from './mumbai.page';

const routes: Routes = [
  {
    path: '',
    component: MumbaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MumbaiPageRoutingModule {}
