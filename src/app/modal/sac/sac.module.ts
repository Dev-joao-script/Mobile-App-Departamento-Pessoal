import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacPageRoutingModule } from './sac-routing.module';

import { SacPage } from './sac.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: SacPage
    }])
  ],
  declarations: [SacPage]
})
export class SacPageModule {}
