import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmritsarPage } from './amritsar.page';

const routes: Routes = [
  {
    path: '',
    component: AmritsarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmritsarPageRoutingModule {}
