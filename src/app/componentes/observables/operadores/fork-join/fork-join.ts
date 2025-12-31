import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  imports: [],
  templateUrl: './fork-join.html',
  styleUrl: './fork-join.css',
})
export class ForkJoin implements OnInit {

  estado$ = of('Berlin', 'Nueva York', 'Londres');
  paises$ = of('Alemania', 'Estados Unidos', 'Inglaterra');

  paisesEstadosConsole = signal('');


  candidato1$ = new Observable<number>(observer => {
    setTimeout(() => {
      observer.next(1000);
      observer.complete();
    }, 4000);
  });
  candidato2$ = new Observable<number>(observer => {
    setTimeout(() => {
      observer.next(999);
      observer.complete();
    }, 3000);
  });
  candidato3$ = new Observable<number>(observer => {
    setTimeout(() => {
      observer.next(41);
      observer.complete();
    }, 2000);
  });

  candidato1Subscriptor = signal(0);
  candidato2Subscriptor = signal(0);
  candidato3Subscriptor = signal(0);

  candidato1ForkJoin = signal(0);
  candidato2ForkJoin = signal(0);
  candidato3ForkJoin = signal(0);


  httpclient = inject(HttpClient);

  cursosDestacados = [
    this.httpclient.get('https://www.dcinternet.com.mx/rino/cursos/280'),
    this.httpclient.get('https://www.dcinternet.com.mx/rino/cursos/32'),
    this.httpclient.get('https://www.dcinternet.com.mx/rino/cursos/197')
  ];

  cursosDestacadosConsole = signal('');


  ngOnInit(): void {
    forkJoin({estados: this.estado$, paises: this.paises$})
      .subscribe(value => {
        this.paisesEstadosConsole.update(currentValue => 
          currentValue += JSON.stringify(value, null, 2)
        );
      });

    forkJoin({
      candidato1: this.candidato1$, 
      candidato2: this.candidato2$,
      candidato3: this.candidato3$
    }).subscribe(valor => {
      this.candidato1ForkJoin.set(valor.candidato1);
      this.candidato2ForkJoin.set(valor.candidato2);
      this.candidato3ForkJoin.set(valor.candidato3);
    });

    this.candidato1$.subscribe(value => this.candidato1Subscriptor.set(value));
    this.candidato2$.subscribe(value => this.candidato2Subscriptor.set(value));
    this.candidato3$.subscribe(value => this.candidato3Subscriptor.set(value));

    forkJoin(this.cursosDestacados).subscribe(valor =>
      this.cursosDestacadosConsole.update(currentValue => 
        currentValue += JSON.stringify(valor, null, 2)
      )
    );
  }
}
