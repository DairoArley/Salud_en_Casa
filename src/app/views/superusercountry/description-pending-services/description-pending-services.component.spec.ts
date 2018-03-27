import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPendingServicesComponent } from './description-pending-services.component';

describe('DescriptionPendingServicesComponent', () => {
  let component: DescriptionPendingServicesComponent;
  let fixture: ComponentFixture<DescriptionPendingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionPendingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionPendingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
