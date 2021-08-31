import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcedPageRoutingModule } from './conced-routing.module';

import { ConcedPage } from './conced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcedPageRoutingModule
  ],
  declarations: [ConcedPage]
})
export class ConcedPageModule {}
