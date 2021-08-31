import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraChequesPageRoutingModule } from './contra-cheques-routing.module';

import { ContraChequesPage } from './contra-cheques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraChequesPageRoutingModule
  ],
  declarations: [ContraChequesPage]

})
export class ContraChequesPageModule {}
