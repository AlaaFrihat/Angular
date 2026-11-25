import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  @Input() ProductName: string = 'Laptop';
  @Input() ProductDescription: string = 'High-performance laptop';
  @Input() ProductPrice: number = 750;
  @Input() ProductStatus: string = 'Available';
  @Input() quantity: number = 5;

  ProductImage: string = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400';
  isDisabled: boolean = false;
  discountPercentage: number = 10;

  ProductQuantity = signal(0);

  increaseQuantity(): void {
    this.ProductQuantity.update((val) => val + 1);
  }

  decreaseQuantity(): void {
    this.ProductQuantity.update((val) => (val > 0 ? val - 1 : val));
  }

  @Output() addToCartEvent = new EventEmitter<{ name: string; quantity: number; price: number }>();

  AddToCart(): void {
    this.addToCartEvent.emit({
      name: this.ProductName,
      quantity: this.ProductQuantity(),
      price: this.ProductPrice
    });
  }
}