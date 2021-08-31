import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtestadosPage } from './atestados.page';

const routes: Routes = [
  {
    path: '',
    component: AtestadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtestadosPageRoutingModule {}
