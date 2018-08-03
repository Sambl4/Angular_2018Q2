import { Injectable } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, Router, Params } from '@angular/router';
import * as _ from 'lodash';
import { User } from '../model/user.model';

import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();

  private dbUsers: User[] = [];
  private users: User[] = [
  // {
  //   id: 1234567890,
  //   email: 'user@gmail.com',
  //   firstName: 'Test',
  //   lastName: 'User',
  //   pass: '1234',
  //   role: 'User',
  //   token: 'fake0987654321Tokenresu'
  // }, {
  //   id: 91234567890,
  //   email: 'admin@gmail.com',
  //   firstName: 'Test',
  //   lastName: 'Admin',
  //   pass: '1234',
  //   role: 'Admin',
  //   token: 'fake09876543219Tokennimda'
  // }
  ];

  private activeUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // this.activatedRoute.url.subscribe(url => console.log(url));
    this.activatedRoute.data.subscribe((data) => {
      // console.log(data);
    });
    console.log(this.router.url);
   }

  Login(user: User) {
    const userIndex = this.getUserIndex(user);
    if (userIndex >= 0 && user.email === this.users[userIndex].email &&
        user.pass === this.users[userIndex].pass) {
        user.token = this.generateToken(user);
        this.setTokenToStorage(user.token);
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
    this.getTokenFromDB(this.getTokenFromStorage()) ||
    this.getTokenFromStorage() === _.get(this.GetActiveUserInfo(), 'token') ?
      this._isAuthenticated.next(true) :
      this._isAuthenticated.next(false);
    return this.isAuthenticated;
  }

  GetActiveUserInfo() {
    return this.activeUser;
  }

  generateToken(user: User) {
    return 'fake' + user.id.toString().split('').reverse().join('') +
          'token' + user.firstName.toLowerCase().split('').reverse().join('');
  }

  setTokenToStorage(token) {
    localStorage.setItem('mytoken', token);
  }

  setUserToDB(user: User) {
    // this.users.push(user);
    localStorage.setItem('db',  JSON.stringify(this.users));
  }

  removeTokenFromStorage() {
    localStorage.setItem('mytoken', '');
  }

  getTokenFromStorage() {
    return localStorage.getItem('mytoken');
  }

  getTokenFromDB(token: string): boolean {
    const storagedUsers: User = JSON.parse(localStorage.getItem('db'));
    this.activeUser = _.find(storagedUsers, {token : token});

    return this.activeUser ? true : false;

  }

  isEmailExist(user: User): boolean {
    return _.findIndex(this.users, {email : user.email}) !== -1;
  }

  registerNewUser(user: User) {
    user.token = this.generateToken(user);
    this.users.push(user);
    this.setUserToDB(user);
  }

  private getUserIndex(user: User) {
    return _.findIndex(this.users, {email : user.email});
  }
}
