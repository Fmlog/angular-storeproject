import { Component, OnInit } from '@angular/core';
import { Cart, Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) {
    this.cart = { products: [], totalPrice: 0 };
  }
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  increaseAmount(p:Product){
    console.log(p.amount)
    this.cartService.changeAmount(p)
  }
}
