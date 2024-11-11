import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetFriPage } from './budget-fri.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetFriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetFriPageRoutingModule {}
