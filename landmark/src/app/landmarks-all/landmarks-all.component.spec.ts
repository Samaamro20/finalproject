import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarksAllComponent } from './landmarks-all.component';

describe('LandmarksAllComponent', () => {
  let component: LandmarksAllComponent;
  let fixture: ComponentFixture<LandmarksAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarksAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarksAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
