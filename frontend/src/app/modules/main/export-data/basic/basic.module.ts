import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GeographyComponent } from './geography/geography.component';


@NgModule({
  declarations: [
    BasicComponent,
    GeographyComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BasicModule { }
