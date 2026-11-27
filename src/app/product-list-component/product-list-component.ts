import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 850,
      category: 'Electronics',
      isAvailable: true,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 450,
      category: 'Electronics',
      isAvailable: true,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 120,
      category: 'Accessories',
      isAvailable: false,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 180,
      category: 'Accessories',
      isAvailable: true,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    },
    {
      id: 5,
      name: 'Tablet',
      price: 300,
      category: 'Electronics',
      isAvailable: false,
      discount: 5,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'
    },
    {
      id: 6,
      name: 'Keyboard',
      price: 65,
      category: 'Accessories',
      isAvailable: true,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 45,
      category: 'Accessories',
      isAvailable: true,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400'
    },
    {
      id: 8,
      name: 'Monitor',
      price: 220,
      category: 'Electronics',
      isAvailable: false,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
    }
  ];

  buyNow(productName: string): void {
  alert(`You selected ${productName}!`);
}

orderStatus: string = 'Pending';

changeStatus(newStatus: string): void {
  this.orderStatus = newStatus;
}

selectedCategory: string = 'Electronics';
}