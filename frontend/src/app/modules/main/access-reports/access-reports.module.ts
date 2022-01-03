import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';
import { AccessReportsRoutingModule } from './access-reports-routing.module';
import { AccessReportsComponent } from './access-reports/access-reports.component';
import { AccessReportsDashboardComponent } from './access-reports-dashboard/access-reports-dashboard.component';
import { AccessReportsSelectDropdownComponent } from './access-reports-select-dropdown/access-reports-select-dropdown.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccessReportsFiltersComponent,
    AccessReportsComponent,
    AccessReportsDashboardComponent,
    AccessReportsSelectDropdownComponent,
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    AccessReportsRoutingModule,
    FormsModule
  ]
})
export class AccessReportsModule { }
