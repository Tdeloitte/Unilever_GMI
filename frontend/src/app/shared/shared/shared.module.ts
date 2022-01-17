import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TooltipComponent, ReactiveFormsModule],
})
export class SharedModule {}
