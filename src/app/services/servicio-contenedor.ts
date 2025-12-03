import { computed, Injectable, Signal, signal } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioContenedor {
  
  // #<nombre_variable> es equivalente a private _<nombre_variable>
  private _elementos = signal<string[]>([]);

  // Sin modificador es público
  elementos = computed(this._elementos);

  agregarElemento(elemento:string) {
    this._elementos.update(value => {
      value.push(elemento)
      return value;
    });
  }

  eliminarElemento(elemento:string) {
    this._elementos.update(value => value.filter(e => e !== elemento));
  }
}
