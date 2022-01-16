import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRankComponent } from './air-rank.component';

describe('AirRankComponent', () => {
  let component: AirRankComponent;
  let fixture: ComponentFixture<AirRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
