import { Component, inject } from '@angular/core';
import { ApiResourceService } from '../../services/api-resource-service';

@Component({
  selector: 'app-cursos-paginacion',
  imports: [],
  templateUrl: './cursos-paginacion.html',
  styleUrl: './cursos-paginacion.css',
})
export class CursosPaginacion {

  service = inject(ApiResourceService);

  cursos = this.service.cursosPaginable;


  nextPage() {
    this.service.pagina.update(pag => pag + 1);
  }

  previousPage() {
    this.service.pagina.update(pag => pag - 1);
  }
}
