import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingServicesComponent } from './pending-services.component';

describe('PendingServicesComponent', () => {
  let component: PendingServicesComponent;
  let fixture: ComponentFixture<PendingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
