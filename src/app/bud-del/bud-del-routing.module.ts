import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudDelPage } from './bud-del.page';

const routes: Routes = [
  {
    path: '',
    component: BudDelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudDelPageRoutingModule {}
