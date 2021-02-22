import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  editUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    pid: new FormControl(''),
  })

  constructor(
    private router: ActivatedRoute,
    private http: CommonService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser() {
    this.http.getCurrentData(this.router.snapshot.params.id).subscribe((result: any) => {
      
      this.editUser = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
      })
    })
  }

  updateUser() {
    console.log(this.editUser.value)
    this.http.updateUser(this.router.snapshot.params.id, this.editUser.value).subscribe((result) => {
      console.log(result)
      this._location.back();
    })
  }

}
