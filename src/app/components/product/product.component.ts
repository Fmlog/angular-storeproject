import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  @Input() product: Product;
  amount: number;
  amountList: number[];
  productList$ = Observable<Product[]>
  selectedId: number;
  constructor(private route: ActivatedRoute) {
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.amount = 1;
    this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedId = 0
  }

  addToCart(p: Product, amount: number){
    console.log(p)
    console.log(amount)
  }

  ngOnInit(): void {
  }
}
