import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KochiPage } from './kochi.page';

const routes: Routes = [
  {
    path: '',
    component: KochiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KochiPageRoutingModule {}
