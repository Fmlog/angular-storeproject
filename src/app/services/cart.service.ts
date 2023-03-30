import { Injectable } from '@angular/core';
import { Cart, Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart;
  constructor() {
    this.cart = { products: [], totalPrice: 0 };
  }
  getCart() {
    return this.cart;
  }
  addtoCart(p: Product) {
    let found = this.cart.products.find((product) => product.id === p.id);
    if (found) {
      const oldamount = found.amount;
      found.amount = +oldamount + +p.amount;
    } else {
      this.cart.products.push(p);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    this.cart.totalPrice = 0;
    for (let p of this.cart.products) {
      this.cart.totalPrice += p.price * p.amount!;
    }
    return this.cart.totalPrice;
  }
  removeProduct(p: Product) {
    this.cart.products = this.cart.products.filter((_p) => _p.id !== p.id);
    this.getTotalPrice();
  }
  changeAmount(p: Product) {
    if (p.amount! < 1) this.removeProduct(p);

    this.getTotalPrice();
  }
}
