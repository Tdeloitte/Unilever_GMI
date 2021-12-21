import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';
import { AccessReportsRoutingModule } from './access-reports-routing.module';
import { AccessReportsComponent } from './access-reports/access-reports.component';
import { AccessReportsDashboardComponent } from './access-reports-dashboard/access-reports-dashboard.component';
import { AccessReportsSelectDropdownComponent } from './access-reports-select-dropdown/access-reports-select-dropdown.component';



@NgModule({
  declarations: [
    AccessReportsFiltersComponent,
    AccessReportsComponent,
    AccessReportsDashboardComponent,
    AccessReportsSelectDropdownComponent
  ],
  imports: [
    CommonModule,
    AccessReportsRoutingModule
  ]
})
export class AccessReportsModule { }
