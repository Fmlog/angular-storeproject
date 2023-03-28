import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  products: Product[] =[]


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  // If it were from an API with GET by id
  // getProduct(id: string): Observable<Product>{
  //   return this.http.get<Product>(`assets/data.json/${id}`);
  // }

  getProduct(productid: string): Product{
    this.getProducts().subscribe((res) => {
      this.products = res;
    });
     return this.products.find(x => x.id == parseInt(productid))!
}

}
