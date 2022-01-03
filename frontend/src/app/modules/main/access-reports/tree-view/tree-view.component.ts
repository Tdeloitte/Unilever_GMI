import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  @Input('node') node: any = {};
  @Output() selectLabel: EventEmitter<any> = new EventEmitter();
  showChildren = false;
  constructor() {}

  ngOnInit(): void {
    this.showChildren = this.node?.root;
  }

  onShowChildren() {
    this.showChildren = !this.showChildren;
  }

  onSelect(node: string) {
    this.selectLabel.emit(node);
  }

  handleSelectEvent(event: any) {
    console.log(' parent ', event);
    this.selectLabel.emit(event);
  }
}
