import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportDataRoutingModule } from './export-data-routing.module';
import { ExportDataComponent } from './export-data.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ExportDataComponent
  ],
  imports: [
    CommonModule,
    ExportDataRoutingModule,
    RouterModule
  ]
})
export class ExportDataModule { }
