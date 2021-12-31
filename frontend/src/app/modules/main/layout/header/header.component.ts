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
  constructor(private commonService: CommonService,private router:Router) { }
  
  ngOnInit(): void {
    this.commonService.reportType.subscribe((res)=>{this.headerType=res;
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
  // navigators(){
  //   if(this.headerType !=="Home"){
  //   this.router.navigate(["./home"]);
  //   }
  //   else if(this.headerType !=="Access Reports"){
  //     this.router.navigate(["./access-report"]);
  //   }
  // }
  navigateToHome(){
    this.router.navigate(["./dashboard"]);
  }
}
