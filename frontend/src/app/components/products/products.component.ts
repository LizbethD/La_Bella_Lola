import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import {NgForm} from '@angular/forms';
import { Product } from 'src/app/models/product';

declare var M: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  addProduct(form: NgForm){
    if(form.value._id) {
      this.productService.putProduct(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.getProducts();
      })
    }else{
      this.productService.postProduct(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.getProducts();
      });  
    }
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(res => {
    this.productService.products = res as Product[];
    console.log(res);
    });
  }

  editProduct(product: Product){
    this.productService.selectedProduct = product;
  }

  deleteProduct(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct(_id)
      .subscribe(res => {
        this.getProducts();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
