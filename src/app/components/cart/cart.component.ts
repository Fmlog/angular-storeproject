import { Component, OnInit } from '@angular/core';
import { Cart, Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  username: string;
  address: string;
  creditCard!: number;

  constructor(private cartService: CartService, private route: Router) {
    this.cart = { products: [], totalPrice: 0 };
    this.username = '';
    this.address = '';
  }
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  changeAmount(p: Product) {
    console.log(p.amount);
    this.cartService.changeAmount(p);
    if (p.amount! < 1) alert('Product removed');
  }
  onSubmit(f: NgForm) {
    this.cartService.addUserInfo(f.value.name, f.value.address, f.value.card);
    this.goToConfirmation();
  }

  goToConfirmation(): void {
    this.route.navigate(['/confirmation']);
  }
}
