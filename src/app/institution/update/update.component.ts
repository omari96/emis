import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { updateService } from '../service/update.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  editInstitution = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    pid: new FormControl(''),
  })

  constructor(
    private router: ActivatedRoute,
    private http: updateService,
    private _location: Location
  ) { }

  ngOnInit(): void {

    this.getInstitution();

  }


  getInstitution() {
    this.http.getCurrentData(this.router.snapshot.params.id).subscribe((result: any) => {
      this.editInstitution = new FormGroup({
        name: new FormControl(result['name']),
        number: new FormControl(result['number']),
        pid: new FormControl(result['pid']),
      })
    })
  }

  updateInstitution() {
    this.http.updateInstitution(this.router.snapshot.params.id, this.editInstitution.value).subscribe((result) => {
      this._location.back();
    })
  }

}
