import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo2PageRoutingModule } from './anexo2-routing.module';

import { Anexo2Page } from './anexo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo2PageRoutingModule
  ],
  declarations: [Anexo2Page]
})
export class Anexo2PageModule {}
