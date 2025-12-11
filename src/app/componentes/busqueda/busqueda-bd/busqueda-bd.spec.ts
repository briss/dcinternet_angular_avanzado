import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaBD } from './busqueda-bd';

describe('BusquedaBD', () => {
  let component: BusquedaBD;
  let fixture: ComponentFixture<BusquedaBD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaBD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaBD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
