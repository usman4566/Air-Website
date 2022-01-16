import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuAcademicsComponent } from './au-academics.component';

describe('AuAcademicsComponent', () => {
  let component: AuAcademicsComponent;
  let fixture: ComponentFixture<AuAcademicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuAcademicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
