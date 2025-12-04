import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCurso } from './registro-curso';

describe('RegistroCurso', () => {
  let component: RegistroCurso;
  let fixture: ComponentFixture<RegistroCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
