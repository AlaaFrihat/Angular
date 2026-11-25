import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-component',
  standalone: false,
  styleUrl: './shopping-cart-component.css',
  templateUrl: './shopping-cart-component.html',
})
export class ShoppingCartComponent {
  @Input() productName: string = '';
  @Input() quantity: number = 0;
  @Input() productPrice: number = 0;

  getTotalPrice(): number {
    return this.productPrice * this.quantity;
  }
}
