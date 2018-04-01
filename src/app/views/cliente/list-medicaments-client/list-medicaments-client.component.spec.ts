import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicamentsClientComponent } from './list-medicaments-client.component';

describe('ListMedicamentsClientComponent', () => {
  let component: ListMedicamentsClientComponent;
  let fixture: ComponentFixture<ListMedicamentsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicamentsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicamentsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
