import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  total = signal(0);

  @Input({ required: true }) cart: Product[] = [];

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  // Mejor solucion para rendimiento al momento de sumar un total
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];

    if (cart) {
      this.total.set(this.calculateTotal());
    }

  }

  calculateTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

}
