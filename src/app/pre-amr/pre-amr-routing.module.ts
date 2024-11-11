import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreAmrPage } from './pre-amr.page';

const routes: Routes = [
  {
    path: '',
    component: PreAmrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreAmrPageRoutingModule {}
