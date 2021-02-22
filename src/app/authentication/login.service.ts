import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {

  }

  private token: string = '';

  createAuthorizationHeader(headers: Headers) {
    headers.append('token', this.token);
  }

  login(params: any) {

    let url = 'https://emisdev.ga/api/login';

    this.http.post(url, {
      email: params.email,
      password: params.password,
    }).subscribe((data: any) => {
      localStorage.setItem('token', data['token']);
    });
  }


}
