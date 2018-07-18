import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private authInfo = {
    userMail: 'qwerty@gmail.com',
    userName: 'Qwerty',
    userPass: '123',
    token: '57fake78Token43forQwerty21User'
  };
  private isAuthenticated: boolean;

  constructor() { }

  Login(options) {
    if (options.userMail && options.userPass &&
      options.userMail === this.authInfo.userMail &&
      options.userPass === this.authInfo.userPass) {
        this.setTokenToStorage(this.generateToken());
        this.isAuthenticated = true;
        return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  Logout() {
    this.isAuthenticated = false;
    this.removeTokenFromStorage();
  }

  IsAuthenticated(): boolean {
    this.isAuthenticated = this.getTokenFromStorage() === this.GetUserInfo().token ?
      this.isAuthenticated = true :
      this.isAuthenticated = false;
    return this.isAuthenticated;
  }

  GetUserInfo() {
    return this.authInfo;
  }

  generateToken() {
    return this.authInfo.token;
  }

  setTokenToStorage(token) {
    localStorage.setItem('mytoken', token);
  }

  removeTokenFromStorage() {
    localStorage.setItem('mytoken', '');
  }

  getTokenFromStorage() {
    return localStorage.getItem('mytoken');
  }
}
