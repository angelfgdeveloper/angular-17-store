import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'product 1',
        price: 124.5,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'product 2',
        price: 87,
        image: 'https://picsum.photos/640/640?r=22',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'product 3',
        price: 564.5,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString(),
      },
    ];

    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log('event', event);
  }
}
