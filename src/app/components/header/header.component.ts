import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Add your styles here
})
export class HeaderComponent {
  navbarOpen = false;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
