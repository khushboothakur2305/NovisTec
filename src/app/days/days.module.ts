import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaysPageRoutingModule } from './days-routing.module';

import { DaysPage } from './days.page';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysPageRoutingModule,
    HttpClient
  ],
  declarations: [DaysPage]
})
export class DaysPageModule {}
