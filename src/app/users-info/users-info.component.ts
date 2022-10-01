import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {
users:any=[]
  constructor(private global:GlobalService) {
    this.global.allUsers().subscribe(res=>{
this.users = res.data
    })
  }

  ngOnInit(): void {
  }
  handleDeleteUser(id:any,ind:any){
this.global.deleteUser(id).subscribe(res=>{
this.users.splice(ind,1);
})
  }
}
