import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);
  private readonly authRoutes = ['/login', '/register', '/forgot-password'];
  private readonly useLayout = signal(true);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.useLayout.set(!this.authRoutes.some((route) => this.router.url.startsWith(route)));
    });
    this.useLayout.set(!this.authRoutes.some((route) => this.router.url.startsWith(route)));
  }

  showLayout(): boolean {
    return this.useLayout();
  }
}
