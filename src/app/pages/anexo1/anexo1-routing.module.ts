import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo1Page } from './anexo1.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo1PageRoutingModule {}
