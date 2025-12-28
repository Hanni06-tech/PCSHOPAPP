import { CommonModule, CurrencyPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {  products } from '../models/product';
import { Product } from '../models/product.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule,RouterModule,CurrencyPipe,FormsModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  showFilter = false;
  mobileFilterOpen = false;
  allProducts = products;      // all products from your data file
  filteredProducts: Product[] = [];       // list currently shown on screen
  itemsToShow = 6;             // initial number to display
  


minPrice: number | null = null;
maxPrice: number | null = null;
categories =[
  'cpu','gpu','motherboard','ram','cooler', 'keyboard','mouse','mousepad','headset','mic','headest'
];
selectedCategories:any = {};
  filteredAll: Product[] = [];


constructor() {
  // first load – show only first N products
  this.filteredProducts = this.allProducts.slice(0, this.itemsToShow);

  // IMPORTANT: so viewMore has something to slice
  this.filteredAll = this.allProducts;
}


viewMore() {
  this.itemsToShow += 3;
  this.filteredProducts = this.filteredAll.slice(0, this.itemsToShow);
}

   
applyFilter() {
   this.itemsToShow = 6;
  // 1. Filter all products
  this.filteredAll = this.allProducts.filter(p => {
    const selected = Object.keys(this.selectedCategories)
      .filter(c => this.selectedCategories[c]);

    const categoryMatch =
      selected.length === 0 || selected.includes(p.category);

    const priceMatch =
      (!this.minPrice || p.price >= this.minPrice) &&
      (!this.maxPrice || p.price <= this.maxPrice);

    return categoryMatch && priceMatch;
  });

  // 2. Slice results for display
  this.filteredProducts = this.filteredAll.slice(0, this.itemsToShow);
}


}
