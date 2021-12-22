import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-reports-filters',
  templateUrl: './access-reports-filters.component.html',
  styleUrls: ['./access-reports-filters.component.scss'],
})
export class AccessReportsFiltersComponent implements OnInit {
  openScenario = false;
  openFilters = false;
  constructor() {}
  tree: any = {
    label: 'Node 1',
    children: [
      {
        label: 'Child 1',
        children: [
          {
            label: 'Grand child 1',
            children: [],
          },
          {
            label: 'Grand child 2',
            children: [],
          },
        ],
      },
      {
        label: 'Child 2',
        children: [
          {
            label: 'Grand child 3',
            children: [],
          },
          {
            label: 'Grand child 4',
            children: [],
          },
        ],
      },
    ],
  }

  ngOnInit(): void {}

  showScenario() {
    this.openScenario = !this.openScenario;
  }
  showFilters() {
    this.openFilters = !this.openFilters;
  }
}
