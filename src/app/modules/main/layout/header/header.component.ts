import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerType!: String;
  constructor(private commonService: CommonService) { }
  
  ngOnInit(): void {
    this.commonService.reportType.subscribe((res)=>{this.headerType=res;
      if(this.headerType !=="Home"){
        let element=document.getElementById("navbar");
        if(element != null){
          element.style.backgroundColor="#005eef";
          element.style.color="#fff";
        
        }
      }
    }
    );
    
  }
}
