import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdvancedComponent],
  imports: [CommonModule, AdvancedRoutingModule, SharedModule],
})
export class AdvancedModule {}
