import {AsyncPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, inject, OnInit, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Curso} from '../../modelo/curso';

@Component({
  selector: 'app-zona',
  imports: [ AsyncPipe],
  templateUrl: './zona.html',
  styleUrl: './zona.css',
})
export class Zona implements OnInit {

  reloj = signal(0);

  private readonly httpClient = inject(HttpClient);
  cursos:Curso[] = [];

  x = this.getCursos().subscribe(result => this.cursos = result);
  cursos$ = this.getCursos();


  ngOnInit(): void {
    setInterval(() => this.reloj.update(value => ++value), 1000);
  }


  getCursos() {
    return this.httpClient
        .get<Curso[]>(environment.CursosEP);
  }
}
