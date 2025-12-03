import { Component, inject } from '@angular/core';
import { ServicioContenedor } from '../../../services/servicio-contenedor';

@Component({
  selector: 'app-hijo2',
  imports: [],
  templateUrl: './hijo2.html',
  styleUrl: './hijo2.css',
})
export class Hijo2 {

  service:ServicioContenedor = inject(ServicioContenedor);

  eliminar(elemento:string) {
    this.service.eliminarElemento(elemento);
  }
}
