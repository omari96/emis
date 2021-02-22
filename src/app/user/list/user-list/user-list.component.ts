import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserList } from '../../model/user-list.model.';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  ELEMENT_DATA: UserList[] = [];
  displayedColumns: string[] = ['name', 'email', 'action'];
  dataSource = new MatTableDataSource<UserList>(this.ELEMENT_DATA);

  UserList: UserList[] = [];
  constructor(private http: CommonService) {
    this.fillInstitution()
  }

  ngOnInit(): void {
  }

  fillInstitution() {
    this.http.getlist().subscribe((result: any) => {
      this.dataSource.data = result.data as UserList[];
    });
  }

}
