import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CluAmrPage } from './clu-amr.page';

const routes: Routes = [
  {
    path: '',
    component: CluAmrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CluAmrPageRoutingModule {}
