import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(
    private http: CommonService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.addUser.value);
    this.http.addUser(this.addUser.value).subscribe((result) => {
      console.log(result)
    })
    this._location.back();
  }

}
