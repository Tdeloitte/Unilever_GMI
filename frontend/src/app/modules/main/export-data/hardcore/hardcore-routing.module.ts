import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardcoreComponent } from './hardcore.component';

const routes: Routes = [
  {
    path: '',
    component: HardcoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardcoreRoutingModule {}
