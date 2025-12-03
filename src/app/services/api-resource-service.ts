import { inject, Injectable, resource } from '@angular/core';
import { environment } from '../../environments/environment';
import { Curso } from '../modelo/curso';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiResourceService {
  
  // Solo nota para uso de fetch (promesas)
  private cursosPromise = fetch(environment.CursosEP)
      .then(resultado => resultado.json());

  cursosResource = resource({
    loader: () => fetch(environment.CursosEP).then(response => response.json())
  });


  private readonly httpClient = inject(HttpClient);

  // Solo nota para uso de observables
  private cursosObservable$ = this.httpClient.get<Curso[]>(environment.CursosEP);

  cursosRxResource = rxResource({
    stream: () => this.httpClient.get<Curso[]>(environment.CursosEP)
  });
}
