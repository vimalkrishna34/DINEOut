import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreKochPage } from './pre-koch.page';

const routes: Routes = [
  {
    path: '',
    component: PreKochPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreKochPageRoutingModule {}
