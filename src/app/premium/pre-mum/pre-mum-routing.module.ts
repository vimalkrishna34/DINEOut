import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreMumPage } from './pre-mum.page';

const routes: Routes = [
  {
    path: '',
    component: PreMumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreMumPageRoutingModule {}
