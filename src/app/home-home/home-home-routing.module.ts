import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHomePage } from './home-home.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHomePageRoutingModule {}
