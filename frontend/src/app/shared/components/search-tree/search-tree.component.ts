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
  node: any;
  @ViewChild('searchInput') searchInput: any;
  openDropdown = false;
  pathList: any[] = [];
  value: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.node = this.tree;
  }

  onOpenDropdown() {
    this.openDropdown = !this.openDropdown;
    if (this.openDropdown) this.searchInput.nativeElement.focus();
  }
  onSearch(text: string) {
    const x = this.searchInNode(text, this.tree);
    this.node = x || {};
  }

  searchInNode(text: string, node: any): any {
    if ((node?.label as string)?.toLowerCase().includes(text)) {
      return node;
    } else if (node?.children?.length) {
      for (const childNode of node.children) {
        const result = this.searchInNode(text, childNode);
        if (result !== false) {
          return {
            ...node,
            children: [result],
          };
        }
      }
      return false;
    } else {
      return false;
    }
  }

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
