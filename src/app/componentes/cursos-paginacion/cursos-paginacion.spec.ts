import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPaginacion } from './cursos-paginacion';

describe('CursosPaginacion', () => {
  let component: CursosPaginacion;
  let fixture: ComponentFixture<CursosPaginacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosPaginacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosPaginacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
