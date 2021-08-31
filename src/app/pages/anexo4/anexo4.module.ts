import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo4PageRoutingModule } from './anexo4-routing.module';

import { Anexo4Page } from './anexo4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo4PageRoutingModule
  ],
  declarations: [Anexo4Page]
})
export class Anexo4PageModule {}
