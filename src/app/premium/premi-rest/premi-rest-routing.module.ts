import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiRestPage } from './premi-rest.page';

const routes: Routes = [
  {
    path: '',
    component: PremiRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiRestPageRoutingModule {}
