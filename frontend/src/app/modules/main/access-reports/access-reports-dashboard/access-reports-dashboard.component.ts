import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-reports-dashboard',
  templateUrl: './access-reports-dashboard.component.html',
  styleUrls: ['./access-reports-dashboard.component.scss']
})
export class AccessReportsDashboardComponent implements OnInit {
  showFavourites:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  arr :any[] =[{"name":"hey",
"value":"hi"},
{"name":"hey",
"value":"hi"},
{"name":"hey",
"value":"hi"},
{"name":"hey",
"value":"hi"},
{"name":"hey",
"value":"hi"},
{"name":"hey",
"value":"hi"}]  

mouseEnter(ev:any) {
  let el=document.getElementById(ev)
  if(el !=null){
    el.classList.add("show-fav");
    el.classList.remove("hide-fav");
  }

}

mouseLeave(ev:any) {
  let el=document.getElementById(ev)
  if(el !=null){
    el.classList.add("hide-fav");
    el.classList.remove("show-fav");
  }
}

chooseFavourite(){
  
}

}

