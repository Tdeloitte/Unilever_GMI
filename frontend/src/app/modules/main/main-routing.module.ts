import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'access-report',
        loadChildren: () =>
          import('./access-reports/access-reports.module').then(
            (m) => m.AccessReportsModule
          ),
      },
      {
        path: 'export-data',
        loadChildren: () =>
          import('./export-data/export-data-routing.module').then(
            (m) => m.ExportDataRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
