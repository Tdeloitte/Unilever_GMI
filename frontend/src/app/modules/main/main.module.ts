import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class MainModule { }
