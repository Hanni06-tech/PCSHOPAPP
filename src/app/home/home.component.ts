import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { Product } from '../models/product.model';
import { products } from '../models/product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   transformStyle = 'translate(-50%, -50%)';

     images = [
    '../keyboard.png',
    '../mic.png',
    '../pc.png',
    '../headphones.png',
  ];
  currentIndex = 0;
  interval: any;


  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth + 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 30;
    this.transformStyle = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

   
  }
    ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); 
  }
    ngOnDestroy() {
    clearInterval(this.interval);
  }

nextSlide() {
  const oldIndex = this.currentIndex;
  const slides = document.querySelectorAll('.slide');
  slides[oldIndex]?.classList.add('exit');

  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  setTimeout(() => {
    slides[oldIndex]?.classList.remove('exit');
  }, 1000); 
}

  allProducts: Product[] = products;
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  productsToShow = 3;
  viewMoreClicked = false;

  constructor(private router: Router) {
  this.filteredProducts = this.allProducts.slice(0, this.productsToShow);
  }
 getFilteredList(): Product[] {
    const term = this.searchTerm.toLowerCase();
    return term === ''
      ? this.allProducts
      : this.allProducts.filter(p =>
          p.category.toLowerCase().includes(term)
        );
  } 
  onSearch() {
    this.productsToShow = 3;        
    this.viewMoreClicked = false;   
    this.filteredProducts = this.getFilteredList().slice(0, this.productsToShow);
  }

  viewMore() {
      const filtered = this.getFilteredList();
        if (!this.viewMoreClicked) {
       this.productsToShow += 3;
       this.filteredProducts = filtered.slice(0, this.productsToShow);
       this.viewMoreClicked = true;
    } else {
            this.router.navigate(['/shop']);
    }
  }

 getFilteredCount(): number {
    return this.getFilteredList().length;
  }
  }



