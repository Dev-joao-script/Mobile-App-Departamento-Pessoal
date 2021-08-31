import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturaPageRoutingModule } from './assinatura-routing.module';

import { AssinaturaPage } from './assinatura.page';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: AssinaturaPage
    }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AssinaturaPage]
})
export class AssinaturaPageModule {}
