import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  @Input('node')
  node: any;
  showChildren = false;
  constructor() {}

  ngOnInit(): void {}

  onShowChildren() {
    this.showChildren = !this.showChildren;
  }
}
