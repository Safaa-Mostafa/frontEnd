import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo:any={}
  constructor(public global :GlobalService,private router:Router) {
    let token =localStorage.getItem('token')
    console.log(token)
    if(token){
      this.global.loginFlag=true
      this.global.authMe().subscribe(data=>{
      this.global.userInfo = data.data
  })
}else{

}
}

ngOnInit(): void {
}
  handleLogout(){
    this.global.loginFlag=false
    this.global.Logout().subscribe(data=>{
      localStorage.removeItem('token')
      this.router.navigateByUrl("Login")
    })

  }

}

