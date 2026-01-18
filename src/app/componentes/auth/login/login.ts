import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm:FormGroup = new FormGroup<{
    usuario: FormControl<string | null>,
    password: FormControl<string | null>
  }>({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  login() {
    console.log(this.loginForm.value)
    this.authService.login(
      this.loginForm.value
    ).subscribe({
      next: user => {
        console.log(user);
        if (user && user.success) {
          localStorage.setItem("usuario", this.loginForm.value.usuario);
          localStorage.setItem("token", user.token);
          localStorage.setItem("refreshToken", user.refreshToken);
          localStorage.setItem("rol", user.rol);

          this.authService.isTokenExpirado.set(false);

          this.router.navigateByUrl("/cuentas");
        }
      }
    });
  }
}
