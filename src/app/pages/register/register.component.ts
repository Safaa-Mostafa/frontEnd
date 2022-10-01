import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData={
    name:"",
    email:"",
    password:0,
    age:0
    }
  constructor(private global : GlobalService ,private router: Router,private toastr:ToastrService) {}

  ngOnInit(): void {
  }
  AddUser(data:NgForm){
    this.global.register(this.userData).subscribe(res=>{

    },(err)=>{
      this.toastr.error(err)
    },()=>{
      this.toastr.success("user Added successfully")

this.router.navigateByUrl('/Login')
    })
    }
}
