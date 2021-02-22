import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getlist(page:number) {
    let url = 'https://emisdev.ga/api/institutions?page='+page+'&name&pid';
    return this.http.get(url)
  }

}
