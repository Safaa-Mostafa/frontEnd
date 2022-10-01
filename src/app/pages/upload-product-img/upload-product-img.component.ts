import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-upload-product-img',
  templateUrl: './upload-product-img.component.html',
  styleUrls: ['./upload-product-img.component.css']
})
export class UploadProductImgComponent implements OnInit {
  userId:any;

  img:any
  constructor(private global:GlobalService,private activated :ActivatedRoute,private toastr:ToastrService) {
    this.userId =this.activated.snapshot.paramMap.get("id")

   }

  ngOnInit(): void {
  }
  handleUpload(ev:any){
    console.log(ev);
    this.img = ev.target.files[0];
  }
  handleSubmit(){
    let formData = new FormData();
    console.log(this.img);
    formData.append('img', this.img);
    this.global.ProductImage(formData,this.userId).subscribe(res=>{
      console.log(res);
    },(err)=>{

    },()=>{
      this.toastr.success("added")
    })
  }
}
