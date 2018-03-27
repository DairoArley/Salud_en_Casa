import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDrugsComponent } from './admin-drugs.component';

describe('AdminDrugsComponent', () => {
  let component: AdminDrugsComponent;
  let fixture: ComponentFixture<AdminDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
