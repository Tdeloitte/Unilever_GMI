import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Tooltip } from 'src/app/modules/main/export-data/advanced/tooltip';
import tooltipText from '../../../../../assets/tooltipText.json';



@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit {
  advancedExportForm: FormGroup = new FormGroup({});
  tree: any = {
    root: true,
    label: 'Node 1',
    checked: false,
    children: [
      {
        label: 'Child 1',
        checked: false,
        children: [
          {
            label: 'Grand child 1',
            checked: false,
            children: [],
          },
          {
            label: 'Grand child 2',
            checked: false,
            children: [],
          },
        ],
      },
      {
        label: 'Child 2',
        checked: false,
        children: [
          {
            label: 'Grand child 3',
            checked: false,
            children: [],
          },
          {
            label: 'Grand child 4',
            checked: false,
            children: [],
          },
        ],
      },
      {
        label: 'Child 3',
        checked: false,
      },
    ],
  };
   tooltipsText:Tooltip[]=[] ;
   tooltipsValue:string="";
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
 
  ) {}

  ngOnInit(): void {
    this.commonService.reportType.next('Export data : Advanced Path');
    this.createAdvancedExportForm();
    this.tooltipsText = tooltipText;
  }
  ngOnDestroy(): void {
    this.commonService.reportType.next('Home');
  }

  createAdvancedExportForm() {
    this.advancedExportForm = this.formBuilder.group({
      dimension: this.formBuilder.group({
        addBrandData: [''],
        selectBrands: [''],
        selectedBrands: [[]],
      }),
      metrics: this.formBuilder.group({
        absoluteAndVariance: this.formBuilder.group({
          value: [''],
          volume: [''],
          valueGrowthVSPP: [''],
          valueGrowthVSPY: [''],
        }),
        price: this.formBuilder.group({
          averagePrice: [''],
          averagePriceIndex: [''],
        }),
        marketShareAndVariance: this.formBuilder.group({
          valueShare: [''],
          volumeShare: [''],
          valueShareDevelopmentVSPP: [''],
          valueShareDevelopmentVSPY: [''],
          valueShareDevFromValueShareChangesVSPP: [''],
          valueShareDevFromValueShareChangesVSPY: [''],
          valueShareDevFromVolumeShareChangesVSPP: [''],
          valueShareDevFromVolumeShareChangesVSPY: [''],
          volumeShareDevelopmentVSPP: [''],
          volumeShareDevelopmentVSPY: [''],
        }),
      }),
      timeHorizon: this.formBuilder.group({
        selectPeriods: this.formBuilder.group({
          l4w: [''],
          l12w: [''],
          mat: [''],
          ytd: [''],
          fy: [''],
          quarters: [''],
          months: [''],
          fourWeeks: [''],
        }),
        calendarPeriods: [''],
      }),
      cellData: [''],
      additionalOptions: this.formBuilder.group({
        selectDataSource: [''],
        competitorData: [''],
        sortBy: [''],
        orderBy: [''],
        includeMasterData: [''],
      }),
    });
  }

  getFormGroup(group: string): FormGroup {
    return this.advancedExportForm.controls[group] as FormGroup;
  }

  searchData(searchValue:any) {
    console.log(searchValue);
    let arr =  this.tooltipsText.filter(function(item) {
      return item['attributeName'] === searchValue;
    });
     this.tooltipsValue=arr[0].value;  
  
}

}
