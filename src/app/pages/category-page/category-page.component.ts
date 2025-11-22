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

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category') ?? '';

      this.productService.getAll().subscribe(products => {
        this.filteredProducts = products.filter(p => p.category === this.categoryName);
      });
    });
  }
}


