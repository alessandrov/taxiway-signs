import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
              private router: Router) {
  }

  login(usernameAndPassword) {
    /*return this.userService.login(usernameAndPassword).map(res => res.json()).map(
      res => {
        localStorage.setItem('username', usernameAndPassword.username);
        localStorage.setItem('token-' + usernameAndPassword.username, res.access_token);
      }
    );*/
    return null;
  }

  logout() {
    this.cleanLocalStorage();
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('username') !== null;
  }

  getCurrentUserName() {
    return localStorage.getItem('username');
  }

  cleanLocalStorage() {
    const username = localStorage.getItem('username');
    localStorage.removeItem('token-' + username);
    localStorage.removeItem('username');
  }

}
