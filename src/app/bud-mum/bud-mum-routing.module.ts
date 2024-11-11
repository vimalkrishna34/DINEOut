import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudMumPage } from './bud-mum.page';

const routes: Routes = [
  {
    path: '',
    component: BudMumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudMumPageRoutingModule {}
