import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-cuentas',
  imports: [],
  templateUrl: './cuentas.html',
  styleUrl: './cuentas.css',
})
export class Cuentas implements OnInit {

  authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isTokenExpirado()) {
      const usuario = localStorage.getItem("usuario") ?? '';
      this.authService.refresh({
        "usuario": usuario
      }).subscribe({
        next: user => {
          console.log(user);
          if (user && user.success) {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("token", user.token);
            localStorage.setItem("refreshToken", user.refreshToken);
            localStorage.setItem("rol", user.rol);

            this.authService.isTokenExpirado.set(false);

            this.getCuentas();
          }
        }
      });
    } else {
      this.getCuentas();
    }
  }

  getCuentas() {
    this.authService.getCuentas().subscribe({
      next: cuentas => {
        console.log(cuentas)
      }
      /*,
      error: err => {
        console.log(err);
      }*/
    });
  }
}
