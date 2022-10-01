import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userData:any={

}

loadingImg :boolean = true
constructor(public global:GlobalService) { }

  ngOnInit(): void {
    this.global.authMe().subscribe(data=>{
      this.userData = data.data
     
    },(err)=>{
      console.log(err)
    },()=>{
this.loadingImg=false
    })
  }

}
