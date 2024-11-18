import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CluKochPage } from './clu-koch.page';

const routes: Routes = [
  {
    path: '',
    component: CluKochPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CluKochPageRoutingModule {}
