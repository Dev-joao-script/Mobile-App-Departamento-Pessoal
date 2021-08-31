import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistEpiPageRoutingModule } from './checklist-epi-routing.module';

import { ChecklistEpiPage } from './checklist-epi.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ChecklistEpiPage
    }])
  ],
  declarations: [ChecklistEpiPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ChecklistEpiPageModule {}
