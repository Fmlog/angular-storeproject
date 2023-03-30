import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string;
  products: Product[];

  constructor(private httpService: HttpService) {
    this.title = 'Products List';
    this.products = [];
  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((res) => {
      for (let product of res){
        product['amount']= 1
      }
      this.products = res;
    });
  }
}
