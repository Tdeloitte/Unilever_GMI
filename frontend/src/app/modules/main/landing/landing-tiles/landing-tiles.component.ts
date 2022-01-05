import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-tiles',
  templateUrl: './landing-tiles.component.html',
  styleUrls: ['./landing-tiles.component.scss']
})
export class LandingTilesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateAccessReports(){
    this.router.navigate(["./access-report"]);
  }
  navigateExportData(){
    this.router.navigate(["./export-data"]);
  }
}
