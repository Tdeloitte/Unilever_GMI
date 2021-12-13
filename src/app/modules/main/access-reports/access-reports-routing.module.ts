import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessReportsFiltersComponent } from './access-reports-filters/access-reports-filters.component';


const routes: Routes = [
  {
    path: '',
    component: AccessReportsFiltersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessReportsRoutingModule {}
