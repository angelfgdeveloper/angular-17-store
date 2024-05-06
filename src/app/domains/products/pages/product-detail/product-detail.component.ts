import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;

  product = signal<Product | null>(null);
  cover = signal<string>('');

  private productService = inject(ProductService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          // console.log('product', product);
          this.product.set(product);

          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }

        },
        error: (err) => {},
      });
    }

  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

}
