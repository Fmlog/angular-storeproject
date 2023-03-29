import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
    });
  }
}
// export class ProductDetailComponent implements OnInit {
//   product!: Product;
//   productId: number;
//   amount: number;
//   amountList: number[];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private service: HttpService
//   ) {
//     this.productId = 1;
//     this.amount = 1;
//     this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   }

//   ngOnInit() {
//     this.route.paramMap.subscribe((params: ParamMap)=>{
//       this.productId = +params.get('id')!
//     })
//   }

//   addToCart(p: Product, amount: number) {
//     console.log(p);
//     console.log(amount);
//     alert('Added to cart');
//   }

//ngOnInit() {
// this.product$ = this.route.paramMap.pipe(
//   switchMap((params: ParamMap) =>
//     this.service.getProduct(params.get('id')!))
// );
