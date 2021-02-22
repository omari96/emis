import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class updateService {

  constructor(private http: HttpClient) { }

  getCurrentData(id: any) {
    let url = 'https://emisdev.ga/api/institutions/';

    return this.http.get(`${url}` + `${id}`)
  }

  updateInstitution(id: any, data: any) {
    let url = 'https://emisdev.ga/api/institutions/';
    return this.http.put(`${url}` + `${id}`, data)
  }

  addInstitution(data: any) {
    let url = 'https://emisdev.ga/api/institutions/create';
    return this.http.post(url, data)
  }

}
