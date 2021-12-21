import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-reports-filters',
  templateUrl: './access-reports-filters.component.html',
  styleUrls: ['./access-reports-filters.component.scss']
})
export class AccessReportsFiltersComponent implements OnInit {
  openScenario=false;
  openFilters=false;
   
  constructor() { }
  

  ngOnInit(): void {
  }
  
  showScenario(){
    this.openScenario=!this.openScenario; 
      
  }
  showFilters(){
    this.openFilters=!this.openFilters;
  }
}
