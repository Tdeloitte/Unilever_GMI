import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

 counter:any=1;
  pagesArray!: any[];
  constructor() { }

  ngOnInit(): void {
    this.loadPageData();
 
    

  }
  ngAfterViewInit(){
    this.firstPage();
  }

   loadPageData(){
     let pages:any[]=[
    {
      "id":"1",
     "title":"Dimesions : geography"
    },
    {
      "id":"2",
     "title":"Dimesions : product category"
    },
    {
      "id":"3",
     "title":"Dimesions : brands"
    },
    {
      "id":"4",
     "title":"Dimesions : Metrics"
    },
    {
      "id":"5",
     "title":"Dimesions : Time Horizon"
    },
    {
      "id":"6",
     "title":"Dimesions : Summary & Cells"
    }
]
this.pagesArray=pages;

   }

nextPage(){
  if(this.counter != 6){
  let prevCounter=this.counter;
  if(this.counter<=5)
  this.counter=this.counter + 1;
  
  console.log(this.counter);
  let el=document.getElementById(this.counter);
  let prevEl=document.getElementById(prevCounter);
  if(el !=null)
  el.style.backgroundColor="yellow";
  if(prevEl !=null)
  prevEl.style.backgroundColor="#f5f5f5";
  }
}

previousPage(){
  if(this.counter !=1 ){
  let prevCounter=this.counter;
  if(this.counter>=2)
  this.counter=this.counter - 1;
  let el=document.getElementById(this.counter);
  let prevEl=document.getElementById(prevCounter);
  if(el !=null)
  el.style.backgroundColor="yellow";
  if(prevEl !=null)
  prevEl.style.backgroundColor="#f5f5f5";
  }

}

firstPage(){
  console.log(this.counter);
  let el=document.getElementById(this.counter);
  console.log(el);
  if(el !=null)
  el.style.backgroundColor="yellow";
}


}
