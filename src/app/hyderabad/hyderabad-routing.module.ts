import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HyderabadPage } from './hyderabad.page';

const routes: Routes = [
  {
    path: '',
    component: HyderabadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HyderabadPageRoutingModule {}
