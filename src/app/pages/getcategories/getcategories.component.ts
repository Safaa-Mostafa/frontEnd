import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getcategories',
  templateUrl: './getcategories.component.html',
  styleUrls: ['./getcategories.component.css']
})
export class GetcategoriesComponent implements OnInit {
  categories:any=[]
  productId:any
singleProduct:any
  constructor(public global:GlobalService,private activated: ActivatedRoute) {
    this.global.getAllCategories().subscribe(res=>{
this.categories = res.data
    })
  }

  ngOnInit(): void {


  }
  deleteHandle(id:any,i:any){
this.global.deleteCate(id).subscribe(res=>{
  this.categories.splice(i,1)
})
  }
}
