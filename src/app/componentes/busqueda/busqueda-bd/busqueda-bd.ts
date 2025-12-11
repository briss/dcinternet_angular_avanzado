import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServicioCursos } from '../../../services/servicio-cursos';
import { Observable } from 'rxjs';
import { Curso } from '../../../modelo/curso';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-busqueda-bd',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './busqueda-bd.html',
  styleUrl: './busqueda-bd.css',
})
export class BusquedaBD {

  servicio = inject(ServicioCursos);
  busqueda:FormControl<string | null> = new FormControl('');

  cursos$:Observable<Curso[]> = this.servicio.buscarCurso('');

  terminoBusqueda = "";

  constructor() {
    this.busqueda.valueChanges.subscribe(value => {
      this.cursos$ = this.servicio.buscarCurso(value ?? '');
    });
  }
}
