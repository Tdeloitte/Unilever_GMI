import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss'],
})
export class ExportDataComponent implements OnInit,OnDestroy {
  constructor(private router: Router,private commonService: CommonService) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.commonService.reportType.next("Export data");
    
  }
  ngOnDestroy(): void {
    this.commonService.reportType.next("Home");   
  }

}
