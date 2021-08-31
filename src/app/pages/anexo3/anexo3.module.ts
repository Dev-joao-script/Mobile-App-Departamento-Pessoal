import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo3PageRoutingModule } from './anexo3-routing.module';

import { Anexo3Page } from './anexo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo3PageRoutingModule
  ],
  declarations: [Anexo3Page]
})
export class Anexo3PageModule {}
