import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  amountList: number[];
  constructor(private cart: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1,
    };
    this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void {}
  addToCart(p: Product): void {
    this.cart.addtoCart(p)
    alert('Added to cart');
  }
}
