import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-access-reports',
  templateUrl: './access-reports.component.html',
  styleUrls: ['./access-reports.component.scss']
})
export class AccessReportsComponent implements OnInit,OnDestroy {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.reportType.next("Access reports");
    
  }
  ngOnDestroy(): void {
    this.commonService.reportType.next("");   
  }

}
