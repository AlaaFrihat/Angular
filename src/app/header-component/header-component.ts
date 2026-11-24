import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: false,
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {
  name: string = 'ElectroShop';
  name2: string = 'Welcome to ElectroShop';
  storeSlogan: string = 'Everything You Need in One Place';
  
}
