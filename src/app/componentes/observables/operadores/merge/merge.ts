import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { concatMap, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  imports: [],
  templateUrl: './merge.html',
  styleUrl: './merge.css',
})
export class Merge implements OnInit {

  httpclient = inject(HttpClient);
  cursosIds$ = of(280, 32, 197);

  mergeMapConsole = signal('');

  concatMapConsole = signal('');

  ngOnInit(): void {
    // Paralelo
    this.cursosIds$.pipe(mergeMap(id => {
      let url = 'https://www.dcinternet.com.mx/rino/cursos/' + id;
      this.mergeMapConsole.update(currentValue =>
        currentValue += '\n✏️ GET ' + url
      );
      return this.httpclient.get(url);
    })).subscribe(curso => 
      this.mergeMapConsole.update(currentValue => 
        currentValue += '\n📓\n' + JSON.stringify(curso, null, 2)
      ));

    // Secuencial
    this.cursosIds$.pipe(concatMap(id => {
      let url = 'https://www.dcinternet.com.mx/rino/cursos/' + id;
      this.concatMapConsole.update(currentValue => 
        currentValue += '\n✏️ GET ' + url
      );
      return this.httpclient.get(url);
    })).subscribe(curso => 
      this.concatMapConsole.update(currentValue => 
        currentValue += '\n📓\n' + JSON.stringify(curso, null, 2)
      ));
  }
}
