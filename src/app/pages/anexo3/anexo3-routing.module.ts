import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo3Page } from './anexo3.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo3PageRoutingModule {}
