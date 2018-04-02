import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserMessengerComponent } from './register-user-messenger.component';

describe('RegisterUserMessengerComponent', () => {
  let component: RegisterUserMessengerComponent;
  let fixture: ComponentFixture<RegisterUserMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
