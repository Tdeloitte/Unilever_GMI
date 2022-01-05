import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardcoreRoutingModule } from './hardcore-routing.module';
import { HardcoreComponent } from './hardcore.component';


@NgModule({
  declarations: [
    HardcoreComponent
  ],
  imports: [
    CommonModule,
    HardcoreRoutingModule
  ]
})
export class HardcoreModule { }
