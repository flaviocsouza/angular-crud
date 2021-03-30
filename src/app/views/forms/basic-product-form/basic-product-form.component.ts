import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-basic-product-form',
  templateUrl: 'basic-product-form.component.html',
  styles: [
  ]
})
export class BasicProductFormComponent implements OnInit {

  productForm:FormGroup;
  product:Product;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.builder.group({
      name:[''],
      description:[''],
      price:['']
    });
  }

  submitProductForm(){
    this.product = Object.assign({}, this.productForm.value);
    console.log(this.product)
  }

}
