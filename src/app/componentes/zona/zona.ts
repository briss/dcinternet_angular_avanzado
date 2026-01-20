import {HttpClient} from '@angular/common/http';
import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Curso} from '../../modelo/curso';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-zona',
  imports: [],
  templateUrl: './zona.html',
  styleUrl: './zona.css',
})
export class Zona implements OnInit, OnDestroy {

  reloj = signal(0);

  private readonly httpClient = inject(HttpClient);
  cursos:Curso[] = [];
  cursosSignal = toSignal(this.getCursos());

  x = this.getCursos().subscribe(result => this.cursos = result);
  cursos$ = this.getCursos();


  ngOnInit(): void {
    setInterval(() => this.reloj.update(value => ++value), 1000);
  }

  ngOnDestroy(): void {
    this.x.unsubscribe();
  }


  getCursos() {
    return this.httpClient
        .get<Curso[]>(environment.CursosEP);
  }
}
