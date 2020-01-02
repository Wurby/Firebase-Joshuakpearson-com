import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private fbauth: AngularFireAuth) {}

  authenticate(user: { email: string; password: string }) {
    return this.fbauth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success => {
        console.log(`signed ${success.user.email} in.`);
        localStorage.setItem('user', `${success.user.email}`);
      });
  }

  deauthenticate() {
    localStorage.removeItem('user');
    return this.fbauth.auth.signOut();
  }

  isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    if (this.fbauth.auth.currentUser) {
      return this.fbauth.auth.currentUser;
    } else {
      return 'User is not signed in.';
    }
  }
}
