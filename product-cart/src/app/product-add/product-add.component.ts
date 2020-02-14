import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
       productName: ['', Validators.required ],
       productDescription: ['', Validators.required ],
       productPrice: ['', Validators.required ]
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
