import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRealTimeServicesComponent } from './description-real-time-services.component';

describe('DescriptionRealTimeServicesComponent', () => {
  let component: DescriptionRealTimeServicesComponent;
  let fixture: ComponentFixture<DescriptionRealTimeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionRealTimeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionRealTimeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
