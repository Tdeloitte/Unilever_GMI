import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessReportsSelectDropdownComponent } from './access-reports-select-dropdown.component';

describe('AccessReportsSelectDropdownComponent', () => {
  let component: AccessReportsSelectDropdownComponent;
  let fixture: ComponentFixture<AccessReportsSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessReportsSelectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessReportsSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
