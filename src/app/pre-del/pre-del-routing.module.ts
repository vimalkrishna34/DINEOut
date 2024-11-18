import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreDelPage } from './pre-del.page';

const routes: Routes = [
  {
    path: '',
    component: PreDelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreDelPageRoutingModule {}
