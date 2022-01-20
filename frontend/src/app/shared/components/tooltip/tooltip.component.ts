import { Component, Input, OnInit } from '@angular/core';
import { Tooltip } from 'src/app/modules/main/export-data/advanced/tooltip';
import tooltipText from '../../../../assets/tooltipText.json';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input('text') tooltipContent: string = '';
  tooltipsValue:string="";
  constructor() {}
  tooltipsText:Tooltip[]=[] ;
  ngOnInit(): void {
    
  }
  
}
