import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedicamentsComponent } from './register-medicaments.component';

describe('RegisterMedicamentsComponent', () => {
  let component: RegisterMedicamentsComponent;
  let fixture: ComponentFixture<RegisterMedicamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMedicamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
