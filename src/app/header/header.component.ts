import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: LoginService) {}

  checkUser() {
    return this.auth.isLoggedIn();
  }

  signOut() {
    this.auth.deauthenticate();
  }

  ngOnInit() {}
}
