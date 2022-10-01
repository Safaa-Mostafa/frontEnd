import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productId:any
  productInfo = new FormGroup({
    title:new FormControl(""),
    description:new FormControl("")

})
  constructor(private activated :ActivatedRoute,private global:GlobalService,private toastr : ToastrService) {
    this.productId =this.activated.snapshot.paramMap.get("id")
    this.global.getSingleProduct(this.productId).subscribe(res=>{
      this.productInfo.patchValue(res.data)
    })
  }

  ngOnInit(): void {
  }
  handleImage(){
    this.global.EditProduct(this.productId,this.productInfo.value).subscribe(res=>{
      console.log(res)
    },(err)=>{
    this.toastr.error(err.message)
    },()=>{
    this.toastr.success("success")    })
    }
}
