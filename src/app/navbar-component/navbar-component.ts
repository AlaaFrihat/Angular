import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  standalone: false,
  styleUrl: './navbar-component.css',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {
  selectedPage: string = 'home';
  PageName:string = "";
  SelectedPage(): void {
    this.selectedPage = this.PageName;
  }
}
