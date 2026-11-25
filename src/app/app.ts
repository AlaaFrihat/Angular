import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

  storeName:string = "ElectroShop";
  storeDescription: string = "Your favorite electronics store";
  storeAddress: string = "Amman, Jordan";
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = "USD";
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  productNames: string[] = [
    "Smartphone",
    "Laptop",
    "Headphones",
    "Smartwatch",
    "keyboard"]
    productPrices: number[] = [750,450,80,120,45]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      featuredProducts: {name:string,price:number,description:string}[] = [
        {name:"Smartphone", price:750, description:"Latest model with advanced features"},
        {name:"Laptop", price:450, description:"Powerful performance for all your needs"},
        {name:"Headphones", price:80, description:"Immersive sound experience"},
        {name:"Smartwatch", price:120, description:"Stay connected and track your fitness"},
        {name:"Keyboard", price:45, description:"Ergonomic design for comfortable typing"}
      ]
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      getStoreStatus(): string {
  if (this.isStoreOpen) {
    return 'We Are Open';
  } else {
    return 'We Are Closed';
  }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
discountPercentage: number = 10;

getFinalPrice(): number {
  if (this.discountPercentage > 0) {
    const discountAmount = (this.featuredProducts[0].price * this.discountPercentage) / 100;
    return this.featuredProducts[0].price - discountAmount;
  } else {
    return this.featuredProducts[0].price;
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
totalNumberOfProducts: number = 0;
mostExpensivePrice: number = 0;
cheapestPrice: number = 0;
totalValue: number = 0;

constructor() {
  this.totalNumberOfProducts = this.productPrices.length;

  if (this.productPrices.length > 0) {
    this.mostExpensivePrice = this.productPrices[0];
    this.cheapestPrice = this.productPrices[0];

    for (let i = 0; i < this.productPrices.length; i++) {
      let currentPrice = this.productPrices[i];

      this.totalValue += currentPrice;

      if (currentPrice > this.mostExpensivePrice) {
        this.mostExpensivePrice = currentPrice;
      }

      if (currentPrice < this.cheapestPrice) {
        this.cheapestPrice = currentPrice;
      }
    }
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
ProductName = signal('Laptop');
ProductDescription = signal('High-performance laptop');
ProductPrice = signal(750);
ProductAvailability = signal('In Stock');


selectedProductName: string = '';
  selectedQuantity: number = 0;
  selectedProductPrice: number = 0;

  handleAddToCart(data: { name: string; quantity: number ; price: number }): void {
    this.selectedProductName = data.name;
    this.selectedQuantity = data.quantity;
    this.selectedProductPrice = data.price;
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  
 showSecondProduct(): void {
  this.ProductName.set('Wireless Headphones');
  this.ProductDescription.set('Bluetooth Headphones');
  this.ProductPrice.set(120);
  this.ProductAvailability.set('Available');
}

}
