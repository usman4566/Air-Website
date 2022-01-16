import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOneComponent } from './front-one.component';

describe('FrontOneComponent', () => {
  let component: FrontOneComponent;
  let fixture: ComponentFixture<FrontOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
