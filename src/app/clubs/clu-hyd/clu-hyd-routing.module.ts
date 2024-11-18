import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CluHydPage } from './clu-hyd.page';

const routes: Routes = [
  {
    path: '',
    component: CluHydPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CluHydPageRoutingModule {}
