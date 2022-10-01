import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/interfaces/order';
import { OrderProduct } from 'src/app/interfaces/order-product';
import { Product } from 'src/app/interfaces/product';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  pageSize = 5;
  P: number = 1;
  total: any = 0;
  userId:any
  products: any[] = [];
  loadingImg: boolean = true;
  userData:any={}

  constructor(public global : GlobalService,private router :Router,private toastr: ToastrService) {
    this.global.authMe().subscribe(res=>{
      this.userData=res.data

  })
    this.getAllProducts(2);

  }
  pageChanged(num: any) {
    this.getAllProducts(num - 1);
    this.P = num;
  }


  ngOnInit(): void {

  }

  orderData(product:any,quantityInput:any){
 let productItem:OrderProduct={
price:product.price,
productId :product._id,
quantity:quantityInput.value,
description:product.description,
title :product.title,
img:product.img
};
this.global.order.products.push(productItem)
quantityInput.value =0;
this.toastr.success("product added successfully")
  }


  getAllProducts(pageNum: any) {
    this.global.getProducts(pageNum).subscribe(data=> {

      this.products = data.data;
      this.total = data.count;

    },(err)=>{

    },()=>{
      this.loadingImg = false
    });


  }


makeOrder(){
  this.global.makeOrder(this.global.order,this.userData._id).subscribe(res=>{
    console.log(res)
  })

}









}
