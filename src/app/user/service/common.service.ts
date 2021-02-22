import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getlist() {
    let url = 'https://emisdev.ga/api/users?page=';
    return this.http.get(url)
  }

  getCurrentData(id: any) {
    let url = 'https://emisdev.ga/api/users/';

    return this.http.get(`${url}` + `${id}`)
  }

  updateUser(id: any, data: any) {
    let url = 'https://emisdev.ga/api/users/';
    return this.http.put(`${url}` + `${id}`, data)
  }
 

  addUser(data: any) {
    let url = 'https://emisdev.ga/api/users/create';
    return this.http.post(url, data)
  }
}
