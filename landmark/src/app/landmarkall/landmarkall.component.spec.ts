import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkallComponent } from './landmarkall.component';

describe('LandmarkallComponent', () => {
  let component: LandmarkallComponent;
  let fixture: ComponentFixture<LandmarkallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
