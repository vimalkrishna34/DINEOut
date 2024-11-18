import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudAmrPage } from './bud-amr.page';

const routes: Routes = [
  {
    path: '',
    component: BudAmrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudAmrPageRoutingModule {}
