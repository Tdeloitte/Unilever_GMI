import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-reports-select-dropdown',
  templateUrl: './access-reports-select-dropdown.component.html',
  styleUrls: ['./access-reports-select-dropdown.component.scss'],
})
export class AccessReportsSelectDropdownComponent implements OnInit {
  openDropdown = false;
  constructor() {}

  ngOnInit(): void {}

  onOpenDropdown() {
    this.openDropdown = !this.openDropdown;
  }
}
