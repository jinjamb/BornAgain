import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  currentUser = '';
  
  adminList = ['admin', 'admin2'];

  logIn(username: string) {
    this.loggedIn = true;
    this.currentUser = username;
  }

  logOut() {
    this.loggedIn = false;
    this.currentUser = '';
  }

  constructor() { }

  isAdmin() {
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn && this.adminList.includes(this.currentUser));
    });
    return isUserAdmin;
  }
}
