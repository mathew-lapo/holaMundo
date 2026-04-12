import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products_ {
  products: Product[] = [];
  constructor(private productService: Products) {
    this.products = this.productService.getProducts();
  }
}
