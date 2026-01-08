import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioSpinner {

  #counter = signal(0);
  readonly activo = computed<boolean>(() => this.#counter() > 0);

  incrementar() {
    this.#counter.update(value => value = value + 1);
  }

  decrementar() {
    this.#counter.update(value => value = Math.max(0, value - 1));
  }
}
