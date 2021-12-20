import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-access-reports-select-dropdown',
  templateUrl: './access-reports-select-dropdown.component.html',
  styleUrls: ['./access-reports-select-dropdown.component.scss']
})
export class AccessReportsSelectDropdownComponent implements OnInit {

  constructor() { }
  
 
  ngOnInit(): void {
    let selected : any = document.querySelector(".selected");
    let optionsContainer = document.querySelector(".options-container");
  
    let optionsList = document.querySelectorAll(".option");
    if(selected !== null  ){
    selected.addEventListener("click", () => {
      if(optionsContainer !== null)
      optionsContainer.classList.toggle("active");
    });
  }
    
    optionsList.forEach(o => {
      
      o.addEventListener("click", () => {
        if(selected !== null ){
          if( o != null){
            selected.innerHTML = o.querySelector("label")?.innerHTML;
          }     
          if(optionsContainer != null)
          optionsContainer.classList.remove("active");
        }
     
      });
    });
  }


}
