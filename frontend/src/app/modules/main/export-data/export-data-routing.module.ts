import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportDataComponent } from './export-data.component';

const routes: Routes = [
  {
    path: '',
    component: ExportDataComponent,
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('./basic/basic.module').then((m) => m.BasicModule),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./advanced/advanced.module').then(
        (m) => m.AdvancedModule
      ),
  },
  {
    path: 'hardcore',
    loadChildren: () =>
      import('./hardcore/hardcore.module').then(
        (m) => m.HardcoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportDataRoutingModule {}
