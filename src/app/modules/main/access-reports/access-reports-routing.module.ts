import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';
import { AccessReportsComponent } from './access-reports/access-reports.component';


const routes: Routes = [
  {
    path: '',
    component: AccessReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessReportsRoutingModule {}
