import { Component, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 cartService = inject(CartService);

  get cart(): Product[] {
    return this.cartService.getCart();
  }

  get total(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
