import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServicioCursos } from '../../../services/servicio-cursos';
import { Observable, switchMap } from 'rxjs';
import { Curso } from '../../../modelo/curso';
import { AsyncPipe } from '@angular/common';
import { ApiResourceService } from '../../../services/api-resource-service';

@Component({
  selector: 'app-busqueda-bd',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './busqueda-bd.html',
  styleUrl: './busqueda-bd.css',
})
export class BusquedaBD {

  servicio = inject(ServicioCursos);
  servicioResource = inject(ApiResourceService);

  busqueda:FormControl<string | null> = new FormControl('');

  cursos$:Observable<Curso[]> = this.servicioResource.cursosObservable$;

  terminoBusqueda = "";

  constructor() {
    // Usar switchMap permite cancelar las peticiones anteriores cada vez que se
    // manda un nuevo término
    this.busqueda.valueChanges.pipe(
      switchMap(terminoBuscado => 
        this.cursos$ = this.servicio.buscarCurso(terminoBuscado ?? ''))
    ).subscribe(value => {});
  }
}
