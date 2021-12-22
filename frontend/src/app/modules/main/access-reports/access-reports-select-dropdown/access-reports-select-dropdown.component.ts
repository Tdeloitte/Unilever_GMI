import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-reports-select-dropdown',
  templateUrl: './access-reports-select-dropdown.component.html',
  styleUrls: ['./access-reports-select-dropdown.component.scss'],
})
export class AccessReportsSelectDropdownComponent implements OnInit {
  @Input('title')
  title: string = '';
  openDropdown = false;
  constructor() {}
  @Input('tree')
  tree: any = {};
  
  ngOnInit(): void {}

  onOpenDropdown() {
    this.openDropdown = !this.openDropdown;
  }
}
