import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestGroupDetailsPageRoutingModule } from './request-group-details-routing.module';

import { RequestGroupDetailsPage } from './request-group-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestGroupDetailsPageRoutingModule
  ],
  declarations: [RequestGroupDetailsPage]
})
export class RequestGroupDetailsPageModule {}
