import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, ReactiveFormsModule, MatTooltipModule],
  exports: [TooltipComponent, ReactiveFormsModule],
})
export class SharedModule {}
