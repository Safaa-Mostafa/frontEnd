import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  product:any
  products:any={}
  constructor(private activated :ActivatedRoute,public global:GlobalService,private toastr:ToastrService) {
    this.product = this.activated.snapshot.paramMap.get("id")
    this.global.getSingleProduct(this.product).subscribe(product=>{
      this.products=product.data
    },(err)=>{
this.toastr.error(err.message)
    },()=>{
    })

   }
   ngOnInit(): void {
  }

}
