import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getProductsfromAPI(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
