import { Component, inject } from '@angular/core';
import { ServicioCursos } from '../../services/servicio-cursos';
import { AsyncPipe } from '@angular/common';
import { ServicioSpinner } from '../../services/servicio-spinner';

@Component({
  selector: 'app-alumnos',
  imports: [ AsyncPipe ],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {

  alumnosService = inject(ServicioCursos);
  spinnerService = inject(ServicioSpinner);

  alumnos$ = this.alumnosService.getAlumnos();

}
