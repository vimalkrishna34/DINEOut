import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudHydPage } from './bud-hyd.page';

const routes: Routes = [
  {
    path: '',
    component: BudHydPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudHydPageRoutingModule {}
