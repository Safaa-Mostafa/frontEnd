import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-data',
  templateUrl: './edit-customer-data.component.html',
  styleUrls: ['./edit-customer-data.component.css'],
})
export class EditCustomerDataComponent implements OnInit {
  userId: any;
  isSubmit: boolean = false;
  userInfo = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    age: new FormControl(''),
  });
  constructor(
    private activated: ActivatedRoute,
    private global: GlobalService
  ) {
    this.userId = this.activated.snapshot.paramMap.get('id');
    this.global.getSingleUser(this.userId).subscribe((res) => {
      this.userInfo.patchValue(res.data);
    });
  }

  ngOnInit(): void {}
  handleEdit() {
    this.isSubmit = true;
    this.global
      .EditUser(this.userId, this.userInfo.value)
      .subscribe((res) => {});
  }
  canExit(): boolean {
    console.log(this.userInfo.dirty);
    if (this.isSubmit == false) {
      alert('please save changes');
      return false;
    }
    else return true;
  }
}
