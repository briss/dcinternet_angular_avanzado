import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet, Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  private router = inject(Router);


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigateByUrl('/login');
  }
}
