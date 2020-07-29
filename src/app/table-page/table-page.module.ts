import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePagePageRoutingModule } from './table-page-routing.module';

import { TablePagePage } from './table-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablePagePageRoutingModule
  ],
  declarations: [TablePagePage]
})
export class TablePagePageModule {}
