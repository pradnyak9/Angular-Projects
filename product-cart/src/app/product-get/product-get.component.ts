import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe((data: Product[]) => {
        this.products = data;
        console.log('updated product list: ', this.products);
    });
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
     console.log(res);
     this.ngOnInit();
    });
  }

}
