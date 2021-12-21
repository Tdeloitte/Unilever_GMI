import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessReportsFiltersComponent } from './access-reports-filters.component';

describe('AccessReportsFiltersComponent', () => {
  let component: AccessReportsFiltersComponent;
  let fixture: ComponentFixture<AccessReportsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessReportsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessReportsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
