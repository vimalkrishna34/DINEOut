import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubDelPage } from './club-del.page';

const routes: Routes = [
  {
    path: '',
    component: ClubDelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubDelPageRoutingModule {}
