import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTarjetComponent } from './credit-tarjet.component';

describe('CreditTarjetComponent', () => {
  let component: CreditTarjetComponent;
  let fixture: ComponentFixture<CreditTarjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditTarjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTarjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
