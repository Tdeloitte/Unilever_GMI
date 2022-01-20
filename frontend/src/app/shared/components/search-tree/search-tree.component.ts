import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-search-tree',
  templateUrl: './search-tree.component.html',
  styleUrls: ['./search-tree.component.scss'],
})
export class SearchTreeComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('tree') tree: any = {};
  @ViewChild('searchInput') searchInput: any;
  openDropdown = false;
  pathList: any[] = [];
  value: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onOpenDropdown() {
    this.openDropdown = !this.openDropdown;
    if (this.openDropdown) this.searchInput.nativeElement.focus();
  }
  onSearch(text: string) {}

  onSelect(event: any) {
    if (event.checked) {
      this.value.push(event);
    } else {
      const index = this.value.findIndex((val) => val.label === event.label);
      if (index >= 0) this.value.splice(index, 1);
    }
  }

  unSelect(index: number) {
    if (index >= 0) {
      let node: any = this.value.splice(index, 1);
      if (node[0]?.label) {
        this.unCheckNode(node[0].label, this.tree);
      }
    }
  }

  unCheckNode(label: string, node: any) {
    if (node.label === label) {
      node.checked = false;
      return;
    } else if (node?.children?.length) {
      for (const child of node.children) {
        this.unCheckNode(label, child);
      }
    }
  }
}
