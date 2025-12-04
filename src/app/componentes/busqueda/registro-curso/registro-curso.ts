import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-curso',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-curso.html',
  styleUrl: './registro-curso.css',
})
export class RegistroCurso {

  forma:FormGroup = new FormGroup({
    nombre: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("[a-zA-Z ]+")
    ]),
    categoria: new FormControl(),
    duracion: new FormControl(32, [
      Validators.required,
      Validators.min(10)
    ]),
    descripcion: new FormControl(),
    imagen: new FormControl()
  });

  enviar() {
    console.log(this.forma.value);
  }
}
