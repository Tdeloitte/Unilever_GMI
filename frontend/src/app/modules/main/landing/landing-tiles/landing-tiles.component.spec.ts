import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTilesComponent } from './landing-tiles.component';

describe('LandingTilesComponent', () => {
  let component: LandingTilesComponent;
  let fixture: ComponentFixture<LandingTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
