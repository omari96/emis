import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private http: LoginService,
    private router: Router
    ) {
  }
  ngOnInit(): void {

  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if( this.form)

    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    if (this.form.value.email == "admin@cheishvili.ge" && this.form.value.password == "dsdgm31990"){
      this.router.navigate(['/','institutions-list'])
    }else{
      alert("Please Enter Valid Email and Password")
    }
    this.http.login(this.form.value)
  }

  error: string = '';

  submitEM = new EventEmitter();

}
