import { Component, computed, inject, input } from '@angular/core';
import { ApiResourceService } from '../../../services/api-resource-service';
import { RegistroCurso } from "../registro-curso/registro-curso";

@Component({
  selector: 'app-lista-curso',
  imports: [RegistroCurso],
  templateUrl: './lista-curso.html',
  styleUrl: './lista-curso.css',
})
export class ListaCurso {

  terminoBusqueda = input<string>('');

  service = inject(ApiResourceService);
  cursos = this.service.cursosHttpResource;

  cursosFiltro = computed(() => {
    let cursos = this.cursos.value()??[];

    return cursos
      .filter((curso) => curso.nombre.toLowerCase()
      .includes(this.terminoBusqueda().toLowerCase()));
  });
}
