import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePagePageRoutingModule } from './table-page-routing.module';

import { TablePagePage } from './table-page.page';
import { RequestComponent } from './request/request.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablePagePageRoutingModule
  ],
  declarations: [TablePagePage,RequestComponent,ConfirmedComponent]
})
export class TablePagePageModule {}
