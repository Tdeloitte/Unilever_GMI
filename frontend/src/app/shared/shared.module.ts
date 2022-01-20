import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { SearchTreeComponent } from './components/search-tree/search-tree.component';

@NgModule({
  declarations: [TooltipComponent, TreeViewComponent, SearchTreeComponent],
  imports: [CommonModule, ReactiveFormsModule, MatTooltipModule, FormsModule],
  exports: [TooltipComponent, ReactiveFormsModule, SearchTreeComponent],
})
export class SharedModule {}
