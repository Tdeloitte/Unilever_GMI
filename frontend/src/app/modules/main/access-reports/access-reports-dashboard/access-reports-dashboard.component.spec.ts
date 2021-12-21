import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessReportsDashboardComponent } from './access-reports-dashboard.component';

describe('AccessReportsDashboardComponent', () => {
  let component: AccessReportsDashboardComponent;
  let fixture: ComponentFixture<AccessReportsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessReportsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
