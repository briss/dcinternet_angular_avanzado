import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { filter, fromEvent, interval, map, Observable, of, Subscription, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-repaso',
  imports: [ AsyncPipe ],
  templateUrl: './repaso.html',
  styleUrl: './repaso.css',
})
export class Repaso implements OnDestroy, OnInit {

  observableNewSuscriptor:Subscription;
  observableNewConsole = signal('');

  // 1. Crear observable a partir de new
  observableNew$ = new Observable<string>((observador) => {
    setTimeout(() => observador.next("JavaScript"), 2000);
    setTimeout(() => observador.next("TypeScript"), 1000);
    setTimeout(() => observador.next("Angular"), 5000);
    setTimeout(() => observador.complete(), 8000);
  });

  numero:number = 0;
  numeros:number[] = [];
  observableOfConsole = signal('');

  // 2. Crear observable usando función of
  observableOf$ = of(4, 5, 6, 7, 100, 1001);

  observableIntervalSuscriptor:Subscription|undefined;
  observableIntervalConsole = signal('');

  botonObservable = viewChild<ElementRef<HTMLButtonElement>>('botonObservable');
  observableFromEventConsole = signal('');

  observableSwitchMapConsole = signal('');


  constructor() {
    this.observableNewSuscriptor = this.observableNew$.subscribe({
      next: valor => this.observableNewConsole.update(
        currentValue => currentValue += "\n" + valor),
      error: error => {},
      complete: () => this.observableNewConsole.update(
        currentValue => currentValue += "\nCompleto")
    });


    let switchNumeros$ = of(10, 20, 30);
    let switchLetras$ = of('a', 'b', 'c');

    switchNumeros$.pipe(
      switchMap(valor => {
        this.observableSwitchMapConsole.update(
          currentValue => currentValue += '\nInterno: ' + valor);
        return switchLetras$;
      })
    ).subscribe(valor => {
      this.observableSwitchMapConsole.update(
        currentValue => currentValue += "\nExterno: " + valor);
    })
  }

  ngOnInit(): void {
    // Subcripción regular
//    this.observableOf$.subscribe(
//      valor => this.numero = valor
//    );

    // Con operaciones (similar a stream)
    this.observableOf$.pipe(
          tap(valor => this.observableOfConsole.update(
            currentValue => currentValue += "\nTap inicial: " + valor)),
          map((valor) => valor * 1.16), 
          filter(valor => valor > 8),
          tap(valor => this.observableOfConsole.update(
            currentValue => currentValue += "\nTap final: " + valor)),
          take(2)
        )
        .subscribe(valor => this.numeros.push(valor));

    // 3. Crear un observable usando interval (genera un stream de números enteros)
    this.observableIntervalSuscriptor = interval(3000)
        .subscribe(valor => 
            this.observableIntervalConsole.update(() => '' + valor));

    // 4. Crear un observable usando fromEvent
    let boton = this.botonObservable();
    if (boton) {
      // Agrega desde código un evento click al botón
//      boton.nativeElement.addEventListener('click', 
//        (event:Event) => {
//          console.log("Hice click");
//          console.log(event);
//        });

      let botonObservableIntervalo$ = interval(3000);
      let eventoBotonObservable$ = fromEvent(boton.nativeElement, 'click');

      // Si dentro del evento observable nos suscribimos al intervalo, se
      // creará un nuevo intervalo cada vez que se dé click al botón
//      eventoBotonObservable$.subscribe(valor => {
//        botonObservableIntervalo$.subscribe(valorIntervalo => {
//          console.log(valorIntervalo);
//        });
//      });

      // Usando switchMap cada click cancela el intervalo anterior y crea uno
      // nuevo (switchMap regresa un observable)
      eventoBotonObservable$.pipe(
        switchMap(event => botonObservableIntervalo$)
      ).subscribe(valorIntervalo => this.observableFromEventConsole.update(
        currentValue => currentValue += ' ' + valorIntervalo));
    }
  }

  ngOnDestroy(): void {
    // Desuscribiendo
    this.observableNewSuscriptor.unsubscribe();

    if (this.observableIntervalSuscriptor) {
      this.observableIntervalSuscriptor.unsubscribe();
    }
  }
}
