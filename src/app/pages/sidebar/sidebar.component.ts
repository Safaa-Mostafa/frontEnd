import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userData:any={

  }
  categories : any=[]
loadingImg=true
  constructor(public global:GlobalService) { }

  ngOnInit(): void {
    let token =localStorage.getItem('token')
    if(token){
      this.global.loginFlag=true
    this.global.authMe().subscribe(data=>{
      this.userData = data.data
    },(err)=>{
      },()=>{
        this.loadingImg=false
      })
    }
    this.global.getAllCategories().subscribe(res=>{
      this.categories = res.data
          })
  }


}

