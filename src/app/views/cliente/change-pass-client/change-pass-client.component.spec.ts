import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassClientComponent } from './change-pass-client.component';

describe('ChangePassClientComponent', () => {
  let component: ChangePassClientComponent;
  let fixture: ComponentFixture<ChangePassClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
