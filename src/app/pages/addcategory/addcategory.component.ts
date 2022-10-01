import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  CategoryData={
  name:"",
  userId:0
  }
  userData:any={}
  constructor(private global:GlobalService,private router:Router,private toastr : ToastrService) {
    this.global.authMe().subscribe(res=>{
      this.userData=res.data
    })
   }

  ngOnInit(): void {
  }
  AddCategoryHandle(data:NgForm){
    this.CategoryData.userId= this.userData._id
    console.log(this.CategoryData.userId)
    this.global.addCategory(this.CategoryData).subscribe(res=>{

    },(err)=>{
this.toastr.error(err)
    },()=>{
      this.toastr.success("category added successfully")
this.router.navigateByUrl('/category')
    })
    }
}
