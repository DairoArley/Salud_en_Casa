import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeServicesComponent } from './real-time-services.component';

describe('RealTimeServicesComponent', () => {
  let component: RealTimeServicesComponent;
  let fixture: ComponentFixture<RealTimeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
