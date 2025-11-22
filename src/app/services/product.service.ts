import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { products } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getAll(): Observable<Product[]> {
    return of(products);
  }
} 
