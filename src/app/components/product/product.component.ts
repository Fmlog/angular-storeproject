import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  @Input() product: Product;
  amount: number;
  amountList: number[];
  constructor() {
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.amount = 1;
    this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }


  ngOnInit(): void {
  }
  addToCart(p: Product, amount: number){
    console.log(p)
    console.log(amount)
    alert('Added to cart')  }
}
