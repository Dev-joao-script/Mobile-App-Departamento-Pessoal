import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcedPage } from './conced.page';

const routes: Routes = [
  {
    path: '',
    component: ConcedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcedPageRoutingModule {}
