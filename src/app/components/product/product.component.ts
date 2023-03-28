import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;
  amount: number
  constructor() {
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.amount = 1
  }
  counter(i: number) {
    return new Array(i);
}
}
