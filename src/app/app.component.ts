import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent,NgIf,FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showHeader = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hideRoutes = ['/login', '/signup'];
        this.showHeader = !hideRoutes.some(route => event.urlAfterRedirects.startsWith(route));
      });
  }
}
