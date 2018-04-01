import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassUserMessengerComponent } from './change-pass-user-messenger.component';

describe('ChangePassUserMessengerComponent', () => {
  let component: ChangePassUserMessengerComponent;
  let fixture: ComponentFixture<ChangePassUserMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassUserMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassUserMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
