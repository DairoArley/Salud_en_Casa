import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCompletedServicesComponent } from './description-completed-services.component';

describe('DescriptionCompletedServicesComponent', () => {
  let component: DescriptionCompletedServicesComponent;
  let fixture: ComponentFixture<DescriptionCompletedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionCompletedServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCompletedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
