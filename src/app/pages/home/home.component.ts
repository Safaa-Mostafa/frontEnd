import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  pageSize = 5;
  P: number = 1;
  total: any = 0;
  loadingImg: boolean = true;
  constructor(public global:GlobalService){

     this.getAllProducts(2);
  }
  pageChanged(num: any) {
    this.getAllProducts(num - 1);
    this.P = num;
  }
  getAllProducts(pageNum: any) {
    this.global.getProducts(pageNum).subscribe(data=> {
      this.products = data.data;
      this.total = data.count;
    },(err)=>{

    },()=>{
      this.loadingImg = false
    });
  }

  ngOnInit(): void {}
}






