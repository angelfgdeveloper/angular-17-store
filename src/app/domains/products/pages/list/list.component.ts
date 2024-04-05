import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([]);
  // cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    });
  }


  constructor() {
    // const initProducts: Product[] = [
    //   {
    //     id: Date.now(),
    //     title: 'product 1',
    //     price: 124.5,
    //     image: 'https://picsum.photos/640/640?r=23',
    //     creationAt: new Date().toISOString(),
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 2',
    //     price: 87,
    //     image: 'https://picsum.photos/640/640?r=22',
    //     creationAt: new Date().toISOString(),
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 3',
    //     price: 564.5,
    //     image: 'https://picsum.photos/640/640?r=25',
    //     creationAt: new Date().toISOString(),
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 4',
    //     price: 35.87,
    //     image: 'https://picsum.photos/640/640?r=28',
    //     creationAt: new Date().toISOString(),
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 5',
    //     price: 154,
    //     image: 'https://picsum.photos/640/640?r=27',
    //     creationAt: new Date().toISOString(),
    //   },
    //   {
    //     id: Date.now(),
    //     title: 'product 6',
    //     price: 897.5,
    //     image: 'https://picsum.photos/640/640?r=26',
    //     creationAt: new Date().toISOString(),
    //   },
    // ];

    // this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log('event', event);
  }

  addToCart(product: Product) {
    // this.cart.update(prevState => [...prevState, product]);
    this.cartService.addToCart(product);
  }

}
