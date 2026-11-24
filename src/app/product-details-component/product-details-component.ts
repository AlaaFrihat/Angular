import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  ProductName: string = 'Laptop';
  ProductDescription: string = 'High-performance laptop';
  ProductPrice: number = 750;
  ProductImage: string = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400';
  ProductStatus: string = 'Available';
  isDisabled: boolean = false;
  quantity: number = 5;
  discountPercentage: number = 10;
}