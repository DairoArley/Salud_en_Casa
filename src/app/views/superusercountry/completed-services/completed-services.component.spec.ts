import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedServicesComponent } from './completed-services.component';

describe('CompletedServicesComponent', () => {
  let component: CompletedServicesComponent;
  let fixture: ComponentFixture<CompletedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
