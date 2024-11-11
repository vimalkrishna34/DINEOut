import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudKochPage } from './bud-koch.page';

const routes: Routes = [
  {
    path: '',
    component: BudKochPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudKochPageRoutingModule {}
