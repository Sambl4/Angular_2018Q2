import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();

  private authInfo = {
    userMail: 'qwerty@gmail.com',
    userName: 'Qwerty',
    userPass: '123',
    token: '57fake78Token43forQwerty21User'
  };

  constructor() { }

  Login(options) {
    if (options.userMail && options.userPass &&
      options.userMail === this.authInfo.userMail &&
      options.userPass === this.authInfo.userPass) {
        this.setTokenToStorage(this.generateToken());
        this._isAuthenticated.next(true);
        return true;
    } else {
      this._isAuthenticated.next(false);
      return false;
    }
  }

  Logout() {
    this._isAuthenticated.next(false);
    this.removeTokenFromStorage();
  }

  IsAuthenticated() {
    this.getTokenFromStorage() === this.GetUserInfo().token ?
      this._isAuthenticated.next(true) :
      this._isAuthenticated.next(false);
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
