import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegulamentoInternoPage } from './regulamento-interno.page';

const routes: Routes = [
  {
    path: '',
    component: RegulamentoInternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegulamentoInternoPageRoutingModule {}
