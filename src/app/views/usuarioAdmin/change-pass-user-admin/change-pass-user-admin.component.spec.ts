import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassUserAdminComponent } from './change-pass-user-admin.component';

describe('ChangePassUserAdminComponent', () => {
  let component: ChangePassUserAdminComponent;
  let fixture: ComponentFixture<ChangePassUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
