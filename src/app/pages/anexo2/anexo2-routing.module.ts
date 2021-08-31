import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo2Page } from './anexo2.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo2PageRoutingModule {}
