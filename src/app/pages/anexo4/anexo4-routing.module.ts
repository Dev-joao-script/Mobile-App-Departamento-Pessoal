import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo4Page } from './anexo4.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo4PageRoutingModule {}
