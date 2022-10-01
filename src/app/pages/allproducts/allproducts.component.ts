import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products:any=[]
  constructor(public global:GlobalService,private activated: ActivatedRoute) {
    this.global.getAllProducts().subscribe(res=>{
      this.products = res.data
          })
  }

  ngOnInit(): void {
  }
  deleteHandle(id:any,i:any){
    this.global.deleteCate(id).subscribe(res=>{
      this.products.splice(i,1)
    })
      }
}
