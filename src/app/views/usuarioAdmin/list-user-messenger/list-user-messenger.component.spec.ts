import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserMessengerComponent } from './list-user-messenger.component';

describe('ListUserMessengerComponent', () => {
  let component: ListUserMessengerComponent;
  let fixture: ComponentFixture<ListUserMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
