import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CluMumPage } from './clu-mum.page';

const routes: Routes = [
  {
    path: '',
    component: CluMumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CluMumPageRoutingModule {}
