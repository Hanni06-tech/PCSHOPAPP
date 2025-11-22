import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../../models/product';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  cartService = inject(CartService);
  authService = inject(AuthService);

  category = this.route.snapshot.paramMap.get('category')!;
  id = Number(this.route.snapshot.paramMap.get('id'));

  product: Product | undefined = products.find(
    (p: Product) => p.id === this.id && p.category === this.category
  );
fromPage: string = '';

  addToCart() {
    // ✅ Check if user is logged in
    if (!this.authService.isLoggedIn()) {
    
      this.router.navigate(['/signup']); // redirect to signup/login
      return;
    }

    // ✅ Add to cart if logged in
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert(`${this.product.name} added to cart!`);
    }
  }


  goBack() {
  if (this.fromPage === 'shop') {
    this.router.navigate(['/shop']);
  } else {
    this.router.navigate(['/shop', this.category]);
  }
}
}


