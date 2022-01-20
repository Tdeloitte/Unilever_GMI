import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

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
    children: [
      {
        label: 'Child 1',
        children: [
          {
            label: 'Grand child 1',
            children: [],
          },
          {
            label: 'Grand child 2',
            children: [],
          },
        ],
      },
      {
        label: 'Child 2',
        children: [
          {
            label: 'Grand child 3',
            children: [],
          },
          {
            label: 'Grand child 4',
            children: [],
          },
        ],
      },
      {
        label: 'Child 3',
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.commonService.reportType.next('Export data : Advanced Path');
    this.createAdvancedExportForm();
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
}
