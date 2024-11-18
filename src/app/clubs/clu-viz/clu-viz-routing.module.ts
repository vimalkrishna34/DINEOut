import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CluVizPage } from './clu-viz.page';

const routes: Routes = [
  {
    path: '',
    component: CluVizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CluVizPageRoutingModule {}
