import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  name;
  description;
  price;
  stock;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(`assets/mook-data/products.json`).pipe(
      map(data => {
        return data.map(p => this.transformToProduct(p));
      })
    );
  }

  private transformToProduct(data: Product): Product {
    return {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock
    }
  }
}
