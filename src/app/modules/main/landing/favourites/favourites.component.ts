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
      value: 'Market Share'
    },
    {
      name:'India',
      value: 'Market Share'
    },
    {
      name:'India',
      value: 'Market Share'
    },
    {
      name:'India',
      value: 'Market Share'
    },
    {
      name:'India',
      value: 'Market Share'
    },

    {
      name:'India',
      value: 'Market Share'
    },
    {
      name:'India',
      value: 'Market Share'
    },{
      name:'India',
      value: 'Market Share'
    },{
      name:'India',
      value: 'Market Share'
    },
    ,{
      name:'India',
      value: 'Market Share'
    },
    ,{
      name:'India',
      value: 'Market Share'
    },
    ,{
      name:'India',
      value: 'Market Share'
    },
    ,{
      name:'India',
      value: 'Market Share'
    },
    ,{
      name:'India',
      value: 'Market Share'
    },
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},
,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},,{
  name:'India',
  value: 'Market Share'
},


  ]

  ngOnInit(): void {
   this.totalLength=this.favourites.length();
  }


}
