import { Component, inject, OnInit } from '@angular/core';
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
