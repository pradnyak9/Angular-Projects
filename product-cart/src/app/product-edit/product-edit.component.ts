import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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


  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, 
    private fb: FormBuilder ) {  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });

    this.angForm = this.fb.group({
      productName: ['', Validators.required ], // this.productName, // ['', Validators.required ],
      productDescription: ['', Validators.required ], // this.productDescription, // ['', Validators.required ],
      productPrice: ['', Validators.required ] // this.productPrice // ['', Validators.required ]
    });


  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
    });
  }

}
