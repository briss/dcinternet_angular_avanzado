import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ListaCurso } from "../lista-curso/lista-curso";
import { ServicioCursos } from '../../../services/servicio-cursos';
import { Observable } from 'rxjs';
import { Curso } from '../../../modelo/curso';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-busqueda-bd',
  imports: [ReactiveFormsModule, ListaCurso, AsyncPipe, JsonPipe],
  templateUrl: './busqueda-bd.html',
  styleUrl: './busqueda-bd.css',
})
export class BusquedaBD {

  servicio = inject(ServicioCursos);
  busqueda:FormControl<string | null> = new FormControl('');
  
  cursos$ = Observable<Curso[]>;

  terminoBusqueda = "";

  constructor() {
    this.busqueda.valueChanges.subscribe(value => {
      this.cursos$ = this.servicio.buscarCurso(value ?? '').subscribe;
    });
  }
}
