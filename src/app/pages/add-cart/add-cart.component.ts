import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
userId:any
order={

}
constructor(private global:GlobalService,private activated :ActivatedRoute,private router:Router) {
  this.userId =this.activated.snapshot.paramMap.get("id")
  console.log(this.userId)
  this.global.makeOrder(this.order,this.userId).subscribe(res=>{
  })
}

  ngOnInit(): void {
  }


}
