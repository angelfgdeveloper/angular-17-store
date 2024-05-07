import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  // cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  @Input() category_id?: string;

  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    // this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.warn(this.category_id);

    // const category_id = changes['category_id'];
    // if (category_id) {
    //   this.getProducts();
    // }

    this.getProducts();
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

  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        // console.warn(products);
        this.products.set(products);
      },
      error: () => {}
    });
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => { 
        this.categories.set(categories);        
      },
      error: () => {}
    });
  }


}
