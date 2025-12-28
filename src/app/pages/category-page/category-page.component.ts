import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule,RouterModule],
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categoryName = '';
  filteredProducts: Product[] = [];
  filteredAll: Product[] = [];
  itemsToShow = 3;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
     this.categoryName = params.get('category') ?? '';


     this.itemsToShow = 3;  // reset every time category changes

      this.productService.getAll().subscribe(products => {
      this.filteredAll = products.filter(p => p.category === this.categoryName);
      this.filteredProducts = this.filteredAll.slice(0, this.itemsToShow);

      });
      });
  }
  
  viewMore() {
  this.itemsToShow += 3;  
  this.filteredProducts = this.filteredAll.slice(0, this.itemsToShow);
}

}


