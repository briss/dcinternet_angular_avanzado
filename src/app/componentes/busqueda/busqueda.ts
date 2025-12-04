import { Component } from '@angular/core';
import { ListaCurso } from "./lista-curso/lista-curso";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [ListaCurso, FormsModule],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda {

  terminoBusqueda:string = "";
}
