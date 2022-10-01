import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-single-user-cate',
  templateUrl: './single-user-cate.component.html',
  styleUrls: ['./single-user-cate.component.css']
})
export class SingleUserCateComponent implements OnInit {
usreId:any
singleUser:any={}
  constructor(private activated :ActivatedRoute,public global:GlobalService) {
    this.usreId = this.activated.snapshot.paramMap.get("id")
    this.global.getSingleUser(this.usreId).subscribe(product=>{
      this.singleUser=product.data
    })
  }

  ngOnInit(): void {
  }

}
