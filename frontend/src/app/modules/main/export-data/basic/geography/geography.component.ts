import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.scss']
})
export class GeographyComponent implements OnInit {
  @Output() geographyName = new EventEmitter<string>();
  name:string="";

  constructor() { }

  ngOnInit(): void {
  }
  ngOnViewInit(): void {
 
  }
  ngOnChange(){
   
  }
  addNewItem() {
    this.geographyName.emit(this.name);
  }

}
