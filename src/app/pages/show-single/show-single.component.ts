import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-show-single',
  templateUrl: './show-single.component.html',
  styleUrls: ['./show-single.component.css']
})
export class ShowSingleComponent implements OnInit {
productId:any
singleProduct:any
  constructor(public global:GlobalService,private activated: ActivatedRoute) { }

  ngOnInit(): void {
this.productId = this.activated.snapshot.paramMap.get("id")
this.global.getSingle(this.productId).subscribe(product=>{
  this.singleProduct = product
  console.log(product.userId)
})
this.deleteHandle()
}

deleteHandle(){
  this.global.deleteProduct(this.productId).subscribe(res=>{

  },(err=>{
console.log(err)
  }))
  }
}
