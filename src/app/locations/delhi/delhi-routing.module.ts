import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelhiPage } from './delhi.page';

const routes: Routes = [
  {
    path: '',
    component: DelhiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelhiPageRoutingModule {}
