import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioCursos } from '../../../services/servicio-cursos';
import { Curso } from '../../../modelo/curso';

@Component({
  selector: 'app-registro-curso',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-curso.html',
  styleUrl: './registro-curso.css',
})
export class RegistroCurso implements OnInit {

  servicio = inject(ServicioCursos);

  forma:FormGroup = new FormGroup<{
    nombre: FormControl<string | null>,
    categoria: FormControl<string | null>,
    duracion: FormControl<number | null>,
    descripcion: FormControl<string | null>,
    imagen: FormControl<string | null>,
  }>({
    nombre: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    categoria: new FormControl("", [
      Validators.required
    ]),
    duracion: new FormControl(32, [
      Validators.required,
      Validators.min(10)
    ]),
    descripcion: new FormControl("", [
      Validators.required
    ]),
    imagen: new FormControl("", [
      Validators.required
    ])
  });

  errNombre = "";


  ngOnInit(): void {
    const ctrlNombre = this.forma.get("nombre");
    ctrlNombre?.valueChanges.subscribe(valor => 
      this.errNombre = this.validarCampo(ctrlNombre as FormControl, "nombre"));
  }

  validarCampo(control:FormControl, ctrlName:string):string {
    let message = "";
    if (control.errors && (control.touched || control.dirty)) {
      if (control.errors['required']) {
        message = ctrlName + " requerido";
      } else if (control.errors['minLength']) {
        message = ctrlName + " debe tener longitud mínima de 4";
      }
    }

    return message;
  }


  enviar() {
    console.log(this.forma.value);

    this.servicio.registrar(this.forma.value as Curso);
  }

  reset() {
    this.forma.reset({
      duracion: 32
    });
  }
}
