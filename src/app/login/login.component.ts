import { LoginService } from './../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public loginService: LoginService) {}

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login() {
    this.loginService.authenticate(this.loginForm.value);
    this.loginForm.reset();
  }

  resetForm() {
    this.loginForm.reset();
  }

  signOut() {
    this.loginService.deauthenticate();
  }

  checkUser() {
    return this.loginService.isLoggedIn();
  }
}
