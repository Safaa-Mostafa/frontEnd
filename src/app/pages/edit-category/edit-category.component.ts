import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
cateId:any
newCategory= new FormGroup({
  name:new FormControl("")
})

  constructor(private global:GlobalService,private activated :ActivatedRoute,private router:Router) {
   this.cateId =this.activated.snapshot.paramMap.get("id")
    this.global.getSingle(this.cateId).subscribe(res=>{
      this.newCategory.patchValue(res.data)
    })
  }

  ngOnInit(): void {}
  handleEdit(){
    console.log(this.cateId)
    this.global.EditCate(this.cateId,this.newCategory.value).subscribe(res=>{
this.router.navigateByUrl("/category")
    })
      }
}
