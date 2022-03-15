import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   productList: Array<Product> = [
    new Product('Product 1', 200),
    new Product('Product 2', 400)
  ];
  name: string = '';
  amount: number=0;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    let product = new Product(this.name, this.amount)
    this.productList.push(product);
  }
}