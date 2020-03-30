import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import Product from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  products: Product[];
  angForm: FormGroup;
  productName = new FormControl('', Validators.required);
  productDescription = new FormControl('', Validators.required);
  productPrice = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
       productName: this.productName, // new FormControl('', Validators.required);
       productDescription: this.productDescription, // new FormControl('', Validators.required);
       productPrice: this.productPrice, // new FormControl('', Validators.required);
      //  productDescription: ['', Validators.required ],
      //  productPrice: ['', Validators.required ]
     });
   }

   addProduct(ProductName, ProductDescription, ProductPrice) {
     this.ps.addProduct( ProductName, ProductDescription, ProductPrice);
     this.angForm.reset();
     this.router.navigate(['products']);
   }

  ngOnInit(): void {
  }

}
