import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellDetailPageRoutingModule } from './well-detail-routing.module';

import { WellDetailPage } from './well-detail.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [WellDetailPage]
})
export class WellDetailPageModule {}
