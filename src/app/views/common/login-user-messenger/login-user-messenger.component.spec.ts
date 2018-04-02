import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserMessengerComponent } from './login-user-messenger.component';

describe('LoginUserMessengerComponent', () => {
  let component: LoginUserMessengerComponent;
  let fixture: ComponentFixture<LoginUserMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
