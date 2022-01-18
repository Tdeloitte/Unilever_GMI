import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.reportType.next("Export data : Advanced Path");
  }
  ngOnDestroy(): void {
    this.commonService.reportType.next("Home");   
  }
  
}
