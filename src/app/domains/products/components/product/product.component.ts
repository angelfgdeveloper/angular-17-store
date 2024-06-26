import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // img = `https://picsum.photos/640/640?r=${ Math.random() }`;
  // @Input({ required: true }) img: string = ''; // campo obligatorio
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) title: string = '';

  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    // console.log('Click from child');
    // this.addToCart.emit('Hola este es un mensaje desde el hijo ' + this.product.title);
    this.addToCart.emit(this.product);
  }

}
