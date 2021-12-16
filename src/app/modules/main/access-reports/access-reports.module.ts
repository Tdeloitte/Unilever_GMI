import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';
import { AccessReportsRoutingModule } from './access-reports-routing.module';
import { AccessReportsComponent } from './access-reports/access-reports.component';
import { AccessReportsDashboardComponent } from './access-reports-dashboard/access-reports-dashboard.component';



@NgModule({
  declarations: [
    AccessReportsFiltersComponent,
    AccessReportsComponent,
    AccessReportsDashboardComponent
  ],
  imports: [
    CommonModule,
    AccessReportsRoutingModule
  ]
})
export class AccessReportsModule { }
