import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() { }
  totalLength:any;
  page:number = 1;
  favourites : any =[
    {
      name:'India',
      value: 'Market Share Development',
      type: 'export'
    },
    {
      name:'India',
      value: 'India',
      type: 'access'
    },
  
  

  ]

  ngOnInit(): void {
   this.totalLength=this.favourites.length();
  }
  checkIconType(fav:any){
    if (fav.type == "export"){
      return false
    }
    else return true;
  }

}
