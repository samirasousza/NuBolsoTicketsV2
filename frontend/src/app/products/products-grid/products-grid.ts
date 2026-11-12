import { Component, signal } from '@angular/core';
import { Product } from '../product';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [ProductCard, MatIcon],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      originalPrice: 39.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 9.99,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 49.99,
      originalPrice: 59.99,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 14.99,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 24.99,
      originalPrice: 34.99,
    },
  ]);
}
