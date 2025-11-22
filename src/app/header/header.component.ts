import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 showShop = false;
mobileMenuOpen = false;
onDesktop = window.innerWidth > 1024;

ngOnInit() {
  window.addEventListener('resize', () => {
    this.onDesktop = window.innerWidth > 1200;
  if(!this.onDesktop)this.showShop = false;}
  );
}

toggleMobileMenu() {
  this.mobileMenuOpen = !this.mobileMenuOpen;}
  
   constructor(private router: Router) {}
 

  // Check if user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  // Handle button click
  handleButton() {
    if (this.isLoggedIn()) {
      // Logout
      localStorage.removeItem('user');
      this.router.navigate(['/']); // back to home
    } else {
      // Go to signup page
      this.router.navigate(['/signup']);
    }
  }

  // Optional: show button text dynamically
  getButtonText(): string {
    return this.isLoggedIn() ? 'Logout' : 'Sign Up';
  }


}

