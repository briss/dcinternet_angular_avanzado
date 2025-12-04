import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCurso } from './lista-curso';

describe('ListaCurso', () => {
  let component: ListaCurso;
  let fixture: ComponentFixture<ListaCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
