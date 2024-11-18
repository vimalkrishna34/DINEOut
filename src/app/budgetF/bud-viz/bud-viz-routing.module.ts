import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudVizPage } from './bud-viz.page';

const routes: Routes = [
  {
    path: '',
    component: BudVizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudVizPageRoutingModule {}
