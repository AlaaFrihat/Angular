import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: false,
  styleUrl: './footer-component.css',
  templateUrl: './footer-component.html',
})
export class FooterComponent {
  Storename :string = "ElectroShop";
  Storeaddress: string = "Amman,Jordan";
  Contactemail: string = "info@electroshop.com";
  Copyrightmessage: string = "© 2024 ElectroShop. All rights reserved.";
  


}
