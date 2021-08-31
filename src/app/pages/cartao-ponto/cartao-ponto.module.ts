import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoPontoPageRoutingModule } from './cartao-ponto-routing.module';

import { CartaoPontoPage } from './cartao-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoPontoPageRoutingModule
  ],
  declarations: [CartaoPontoPage]
})
export class CartaoPontoPageModule {}
