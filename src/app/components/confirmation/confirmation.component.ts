import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  totalPrice: number;
  username: string
  constructor (private cart: CartService){
    this.totalPrice = 0
    this.username = ''
  }
  ngOnInit(): void {
      this.totalPrice = this.cart.getTotalPrice()
      this.username = this.cart.getUsername()
  }
}
