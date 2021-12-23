import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-access-reports-select-dropdown',
  templateUrl: './access-reports-select-dropdown.component.html',
  styleUrls: ['./access-reports-select-dropdown.component.scss'],
})
export class AccessReportsSelectDropdownComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('tree') tree: any = {};
  @ViewChild('searchInput') searchInput: any;
  openDropdown = false;
  pathList: any[] = [];
  value: string = '';

  constructor() {}

  ngOnInit(): void {
    this.createPathList(this.tree, '');
  }

  onOpenDropdown() {
    this.openDropdown = !this.openDropdown;
    if (this.openDropdown) this.searchInput.nativeElement.focus();
  }

  createPathList(node: any, path: string) {
    let currentPath = `${path}/${node.label}`;
    this.pathList.push(currentPath);
    if (node?.children?.length) {
      for (const childNode of node.children) {
        this.createPathList(childNode, currentPath);
      }
    }
  }

  createPartialTree(tree: any, path: any) {
    if (path !== '') {
    }
  }

  onSearch(text: string) {
    // for (const key in object) {
    // }
  }

  onSelect(event: string) {
    console.log(event);
    this.value = event;
  }
}
