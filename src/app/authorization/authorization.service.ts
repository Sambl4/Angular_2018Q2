import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { User } from '../model/user.model';

import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();

  private users: User[] = [
  {
    id: 1234567890,
    email: 'user@gmail.com',
    firstName: 'Test',
    lastName: 'User',
    pass: '1234',
    role: 'User',
    token: 'fake0987654321Tokenresu'
  }];

  private activeUser;
  // private authInfo: User = {
  //   id: 1234567890,
  //   email: 'user@gmail.com',
  //   firstName: 'Test',
  //   lastName: 'User',
  //   pass: '1234',
  //   role: 'User',
  //   token: 'fake0987654321Tokenresu'
  // };

  constructor() { }

  Login(user: User) {
    const userIndex = this.getUserIndex(user);
    if (userIndex >= 0 && user.email === this.users[userIndex].email &&
        user.pass === this.users[userIndex].pass) {
        this.setTokenToStorage(this.generateToken(user));
        this.activeUser = this.users[userIndex];
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
    return this.activeUser;
  }

  generateToken(user: User) {
    return 'fake' + user.id.toString().split('').reverse().join('') +
          'token' + user.firstName.toLowerCase().split('').reverse().join('');
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

  isEmailExist(user: User): boolean {
    return _.findIndex(this.users, {email : user.email}) !== -1;
  }

  registerNewUser(user: User) {
    this.users.push(user);
  }

  private getUserIndex(user: User) {
    return _.findIndex(this.users, {email : user.email});
  }
}
