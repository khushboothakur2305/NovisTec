import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmedgroupDetailsPageRoutingModule } from './confirmedgroup-details-routing.module';

import { ConfirmedgroupDetailsPage } from './confirmedgroup-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmedgroupDetailsPageRoutingModule
  ],
  declarations: [ConfirmedgroupDetailsPage]
})
export class ConfirmedgroupDetailsPageModule {}
