import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoPontoPage } from './cartao-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoPontoPageRoutingModule {}
