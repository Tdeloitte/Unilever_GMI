import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, NgForm } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

 counter:any=1;
  pagesArray!: any[];
  basicForm: FormGroup;
  geography: string="";
  brand: string="";
  @Input() geographyName="";
  constructor(private formBuilder:FormBuilder,private commonService:CommonService) {
    this.basicForm=formBuilder.group({
   geo: new FormControl(),
   bran: new FormControl()

    })
   }

  ngOnInit(): void {
    this.commonService.reportType.next("Export data : Basic Path");
    this.loadPageData();
  }

  ngOnDestroy(): void {
    this.commonService.reportType.next("Home");   
  }
  ngAfterViewInit(){
    this.firstPage();
  }

  ngOnChange(){
    this.getGeography;
    console.log(this.geography);``

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
  console.log(this.basicForm.controls['geo'].value);
  // console.log(this.basicForm.controls['bran'].value);
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

getGeography(value:any)
{
  this.basicForm.controls['geo'].setValue(value);
  this.geography=value;
}


}
