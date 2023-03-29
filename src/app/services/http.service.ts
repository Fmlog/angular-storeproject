import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  // If it were from an API with GET by id
  // getProduct(id: string): Observable<Product>{
  //   return this.http.get<Product>(`assets/data.json/${id}`);
  // }

  //   getProduct(productid: string): Product{
  //     this.getProducts().subscribe((res) => {
  //       this.products = res;
  //     });
  //      return this.products.find(x => x.id == parseInt(productid))!
  // }

  getProduct(productid: string): Product {
    fetch('/assets/data.json')
      .then((response) => response.json())
      .then((json) => (this.products = json));
    console.log(this.products)
    return this.products.find((x) => x.id == parseInt(productid))!;
  }
}
