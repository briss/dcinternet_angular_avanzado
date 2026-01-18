import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  httpClient = inject(HttpClient);

  isTokenExpirado = signal(false);

  login(data: {usuario:string, password:string}): Observable<User> {
    return this.httpClient.post<User>("http://localhost:3000/login",
      {
        "usuario": data.usuario,
        "password": data.password
      }
    );
  }

  refresh(data: {usuario:string}): Observable<User> {
    return this.httpClient.post<User>("http://localhost:3000/refresh",
      {
        "usuario": data.usuario
      }
    );
  }

  getCuentas(): Observable<{datos:string}> {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');

    return this.httpClient.get<{datos:string}>(
      `http://localhost:3000/cuentas/${usuario}`
      /*,
      {
        headers: {'Authorization': `Bearer ${token}`}
      }*/
    );
  }
}
