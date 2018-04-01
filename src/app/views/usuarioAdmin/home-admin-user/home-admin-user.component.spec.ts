import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminUserComponent } from './home-admin-user.component';

describe('HomeAdminUserComponent', () => {
  let component: HomeAdminUserComponent;
  let fixture: ComponentFixture<HomeAdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdminUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
