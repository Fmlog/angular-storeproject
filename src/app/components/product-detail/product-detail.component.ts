import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productId: number;
  amountList: number[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private cart: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1,
    };
    this.productId = 1;
    this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = +params.get('id')!;
    });
    this.http
      .getProduct(this.productId)
      .subscribe((product) => (this.product = product!));
  }

  addToCart(p: Product): void {
    this.cart.addtoCart(p);
    alert('Added to cart');
  }
}
