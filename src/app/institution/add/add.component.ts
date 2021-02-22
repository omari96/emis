import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { updateService } from '../service/update.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addInstitution = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    pid: new FormControl(''),
  })

  constructor(
    private http: updateService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  createInstitution() {
    // console.log(this.addInstitution.value);
    this.http.addInstitution(this.addInstitution.value).subscribe((result) =>{
      console.log(result)
    })
    this._location.back();
  }

}
