import { Component, inject } from '@angular/core';
import { ServicioContenedor } from '../../../services/servicio-contenedor';

@Component({
  selector: 'app-hijo1',
  imports: [],
  templateUrl: './hijo1.html',
  styleUrl: './hijo1.css',
})
export class Hijo1 {

  service:ServicioContenedor = inject(ServicioContenedor);

  agregar(elemento:string) {
    console.log("-----------> " + elemento)
    this.service.agregarElemento(elemento);
  }
}
