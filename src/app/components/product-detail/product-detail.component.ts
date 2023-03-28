import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  productId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HttpService
  ) {
    this.productId = '';
  }

  //ngOnInit() {
  // this.product$ = this.route.paramMap.pipe(
  //   switchMap((params: ParamMap) =>
  //     this.service.getProduct(params.get('id')!))
  // );

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.product = this.service.getProduct(this.productId);
  }
}
