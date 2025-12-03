import { Component, inject } from '@angular/core';
import { Hijo1 } from "../hijo1/hijo1";
import { Hijo2 } from "../hijo2/hijo2";
import { ServicioContenedor } from '../../../services/servicio-contenedor';

@Component({
  selector: 'app-contenedor',
  imports: [Hijo1, Hijo2],
  templateUrl: './contenedor.html',
  styleUrl: './contenedor.css',
})
export class Contenedor {

  service:ServicioContenedor = inject(ServicioContenedor);
  
}
