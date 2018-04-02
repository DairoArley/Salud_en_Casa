import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMedicamentComponent } from './modify-medicament.component';

describe('ModifyMedicamentComponent', () => {
  let component: ModifyMedicamentComponent;
  let fixture: ComponentFixture<ModifyMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
