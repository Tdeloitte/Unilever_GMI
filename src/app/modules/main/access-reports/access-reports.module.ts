import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';
import { AccessReportsRoutingModule } from './access-reports-routing.module';
import { AccessReportsComponent } from './access-reports/access-reports.component';



@NgModule({
  declarations: [
    AccessReportsFiltersComponent,
    AccessReportsComponent
  ],
  imports: [
    CommonModule,
    AccessReportsRoutingModule
  ]
})
export class AccessReportsModule { }
