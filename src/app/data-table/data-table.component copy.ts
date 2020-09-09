import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../_services/product.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  product: Product;
  products: Product[];

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products)
        this.products = products
      },
      error => {
        console.log(error);
      }
    );
  }




}

