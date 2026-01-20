import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular Avanzado');

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.getCookies().subscribe({
      next: response => {
        console.log(response);
      }
    });
  }
}
