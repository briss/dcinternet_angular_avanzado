import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  httpClient = inject(HttpClient);
  
  login(data: {usuario:string, password:string}): Observable<{
    token: string,
    success: boolean
  }> {
    return this.httpClient.post<{
    token: string,
    success: boolean
  }>("http://localhost:3000/login", 
      {
        "usuario": data.usuario,
        "password": data.password
      }
    );
  }

  getCuentas(): Observable<{datos:string}> {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');

    return this.httpClient.get<{datos:string}>(
      `http://localhost:3000/cuentas/${usuario}`, 
      {
        headers: {'Authorization': `Bearer ${token}`}
    });
  }
}
