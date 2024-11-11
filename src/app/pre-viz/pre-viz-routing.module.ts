import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreVizPage } from './pre-viz.page';

const routes: Routes = [
  {
    path: '',
    component: PreVizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreVizPageRoutingModule {}
