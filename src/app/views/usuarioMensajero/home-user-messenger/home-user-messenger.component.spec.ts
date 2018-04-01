import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserMessengerComponent } from './home-user-messenger.component';

describe('HomeUserMessengerComponent', () => {
  let component: HomeUserMessengerComponent;
  let fixture: ComponentFixture<HomeUserMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUserMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
