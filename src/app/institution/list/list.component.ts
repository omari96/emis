import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InstitutionList } from '../model/institution-list.model';
import { ListService } from '../service/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ELEMENT_DATA: InstitutionList[] = [];
  displayedColumns: string[] = ['id', 'name', 'number', 'pid', 'action'];
  dataSource = new MatTableDataSource<InstitutionList>(this.ELEMENT_DATA);
  
  listResult: object = {};
  total: number = 0;
  

  institutionList: InstitutionList[] = [];
  constructor(private http: ListService) {
    this.fillInstitution(1);

    console.log(this.dataSource)
  }

  ngOnInit(): void {

  }

  pageEvent: PageEvent = new PageEvent;

  public getListByPage(event :any){
    console.log(event.pageIndex+1);
    this.fillInstitution(event.pageIndex+1);
    return event;
  }
  

  fillInstitution(page:number) {     
    this.http.getlist(page).subscribe((result: any) => {
      this.dataSource.data = result.data as InstitutionList[];
      this.total = result.total;
    });
  }





}
