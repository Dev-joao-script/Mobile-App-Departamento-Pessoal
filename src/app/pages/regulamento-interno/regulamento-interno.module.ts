import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegulamentoInternoPageRoutingModule } from './regulamento-interno-routing.module';

import { RegulamentoInternoPage } from './regulamento-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegulamentoInternoPageRoutingModule
  ],
  declarations: [RegulamentoInternoPage]
})
export class RegulamentoInternoPageModule {}
