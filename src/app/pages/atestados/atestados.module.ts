import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtestadosPageRoutingModule } from './atestados-routing.module';

import { AtestadosPage } from './atestados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtestadosPageRoutingModule
  ],
  declarations: [AtestadosPage]
})
export class AtestadosPageModule {}
