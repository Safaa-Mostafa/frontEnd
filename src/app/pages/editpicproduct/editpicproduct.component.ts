import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-editpicproduct',
  templateUrl: './editpicproduct.component.html',
  styleUrls: ['./editpicproduct.component.css']
})
export class EditpicproductComponent implements OnInit {
  productId:any;

  img:any
  constructor(private global:GlobalService,private activated :ActivatedRoute,private toastr:ToastrService) {
    this.productId =this.activated.snapshot.paramMap.get("id")

   }

  ngOnInit(): void {
  }
  handleUpload(ev:any){
    console.log(ev);
    this.img = ev.target.files[0];
  }
  handleSubmit(){
    let formData = new FormData();
    formData.append('img', this.img);
    this.global.ProductImage(formData,this.productId).subscribe(res=>{
      console.log(res);
    },(err)=>{

    },()=>{
      this.toastr.success("added")
    })
  }
}
