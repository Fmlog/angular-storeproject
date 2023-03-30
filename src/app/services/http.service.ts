import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError, map, subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json').pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }
  getProduct(id: number) {
    this.getProducts().subscribe((res) => {
      for (let product of res) {
        product['amount'] = 1;
      }
    });
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(res.error || 'Server error');
  }
}


















// getProduct(productid: number): Product {
//   const products: Product[] = [...data]
//   console.log(products)
//   return products.find((x) => x.id == productid)!;
// }
// Doesn't work well (i.e doesn't fetch data onInit only works afterwards)
// getProduct(productid: number): Product {
//   this.getProducts().subscribe((res) => {
//     for (let product of res){
//       product['amount']= 1
//     }
//     this.products = res;
//   });
//   console.log(this.products);
//   return this.products.find((x) => x.id == productid)!;
// }
// Doesn't work well (i.e doesn't fetch data onInit only works afterwards)
// getProduct(productid: number): Product {
//   fetch('/assets/data.json')
//     .then((response) => response.json())
//     .then((json) => (this.products = json));

//   return this.products.find((x) => x.id == productid)!;
// }
