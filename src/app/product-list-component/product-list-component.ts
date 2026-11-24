import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products = [
    {
    name: 'Laptop',
    description: 'High-performance laptop',
    price: 750,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    status: 'Available',
    isDisabled: false
  },
  {
    name: 'Smartphone',
    description: 'Latest smartphone',
    price: 450,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    status: 'Available',
    isDisabled: false
  },
  {
    name: 'Headphones',
    description: 'Wireless headphones',
    price: 80,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    status: 'Available',
    isDisabled: false
  },
  {
    name: 'Smart Watch',
    description: 'Smart fitness watch',
    price: 120,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    status: 'Available',
    isDisabled: false
  },
  {
    name: 'Keyboard',
    description: 'Mechanical keyboard',
    price: 45,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    status: 'Unavailable',
    isDisabled: true
  }
  ]

  

  BuyNow(): void {
    alert('Thank you for your purchase!');
  }
}
