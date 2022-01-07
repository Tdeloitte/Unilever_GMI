import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerType!: String;
  colorBlue: boolean=false;
  AccessReports: boolean=false;
  HomeFlag: boolean=false;
  constructor(private commonService: CommonService,private router:Router) { }
  
  ngOnInit(): void {
    this.commonService.reportType.subscribe((res)=>{this.headerType=res;
      this.checkHeaderType();
      if(this.headerType !=="Home"){
        let element=document.getElementById("navbar");
        this.colorBlue=true;     
        if(element !== null){
        element.style.backgroundColor="#005eef";
        }
      }
      else{
     this.colorBlue=false;
     let element=document.getElementById("navbar");    
        if(element !== null){
        element.style.backgroundColor="#fff";
        }
      }
    }
    );
    
  }

  checkHeaderType(){
     if(this.headerType == "Home"){
      this.HomeFlag=true;
    }
    else if(this.headerType == "Access reports"){
      this.AccessReports=true;
      this.HomeFlag=false;
    }
    else if(this.headerType == "Export reports"){
      this.AccessReports=false;
      this.HomeFlag=false;
    }  
  }

  navigateToHome(){
    this.router.navigate(["./dashboard"]);
  }
}
