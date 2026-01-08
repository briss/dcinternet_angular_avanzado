import { inject, Injectable } from '@angular/core';
import { Curso } from '../modelo/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResourceService } from './api-resource-service';
import { Observable } from 'rxjs';
import { Alumno } from '../modelo/alumno';



@Injectable({
  providedIn: 'root',
})
export class ServicioCursos {

  private httpClient = inject(HttpClient);
  apiResourceService = inject(ApiResourceService);

  registrar(curso:Curso):void {
    this.httpClient.post(environment.CursosEP, curso)
        .subscribe(curso => this.apiResourceService.cursosHttpResource.reload());
  }

  buscarCurso(terminoBusqueda:string):Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(environment.CursosEP + '/nombre/busca?nombre=' + terminoBusqueda);
  }

  getAlumnos():Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>('https://www.dcinternet.com.mx/rino/demo/lista-alumnos');
  }
}
