import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo1PageRoutingModule } from './anexo1-routing.module';

import { Anexo1Page } from './anexo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo1PageRoutingModule
  ],
  declarations: [Anexo1Page]
})
export class Anexo1PageModule {}
