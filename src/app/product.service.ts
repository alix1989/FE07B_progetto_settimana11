import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:4201';
  prodotti!: Product[];
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}
