import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingDomiciliosComponent } from './tracking-domicilios.component';

describe('TrackingDomiciliosComponent', () => {
  let component: TrackingDomiciliosComponent;
  let fixture: ComponentFixture<TrackingDomiciliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingDomiciliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingDomiciliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
