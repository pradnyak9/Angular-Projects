import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};
  products: Product[];

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      productName: ['', Validators.required ],
      productDescription: ['', Validators.required ],
      productPrice: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
        console.log('product to edit ', this.product);
      });
    });
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
      this.ps.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
    });
  }

}
