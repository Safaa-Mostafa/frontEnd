import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import {NgForm} from '@angular/forms'
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  category_id:any
  ProductData:Product={
    title:"",
    description:"",
    userId:"",
    price:0,
    categoryId:0,
    quantity:0
  }
  userData:any={}

  categoryData: any[] = [];
  constructor(private global:GlobalService,private router:Router,private activated :ActivatedRoute,private toastr:ToastrService) {
this.getAllCategories()
this.global.authMe().subscribe(res=>{
  this.userData=res.data
})
}
  ngOnInit(): void {
      }
  AddProductHandle(data:NgForm){
    this.ProductData.userId= this.userData._id

    this.global.addProduct(this.ProductData).subscribe(res=>{
    },(err)=>{
this.toastr.error(err)
    },()=>{
this.toastr.success("product added successfully")
this.router.navigateByUrl('/')
    })
    }
    getAllCategories(){
      this.global.getAllCategories().subscribe(res=>{
        this.categoryData = res.data
      },(err=>{
      })
    )
    }


}
