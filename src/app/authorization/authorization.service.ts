import { Injectable } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, Router, Params } from '@angular/router';

import { HttpClient, HttpResponse, HttpErrorResponse,
  HttpParams, HttpHeaders  } from '@angular/common/http';
import * as _ from 'lodash';
import { User } from '../model/user.model';

import { Observable, BehaviorSubject, throwError } from 'rxjs';

const BASE_USERS_URL = 'http://localhost:3004/users';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();

  private redirectUrl: string;
  private authKey: string = '';
  private users: User[] = [];

  private activeUser: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
    // this.activatedRoute.data.subscribe((data) => {
    //   data['auth_key'] = this.authKey;
    // });
    // this.users = JSON.parse(localStorage.getItem('db')) || [];

    this.activatedRoute.queryParams.subscribe((data) => {
      this.redirectUrl = data['redirectedFrom'];
    });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_USERS_URL}`);
  }

  Login(user: User) {
    const userIndex = this.getUserIndex(user);
    if (userIndex >= 0 && user.email === this.users[userIndex].email &&
        user.pass === this.users[userIndex].pass) {
          // this.setTokenToStorage('user.token');
          this.activeUser = this.users[userIndex];
          this.setTokenToStorage(this.activeUser.token);
        // this.authKey = this.activeUser.role;
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
    const token: string = this.getTokenFromStorage();

    if (token) {
      return '';
    } else {
      this._isAuthenticated.next(false);
    }

    if (this.getTokenFromDB(this.getTokenFromStorage()) ||
    this.getTokenFromStorage() === _.get(this.GetActiveUserInfo(), 'token')) {
      this._isAuthenticated.next(true);
      this.router.navigate([this.redirectUrl]);
    } else {
      this._isAuthenticated.next(false);
    }
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
    localStorage.setItem('db', JSON.stringify(this.users));
  }

  removeTokenFromStorage() {
    localStorage.setItem('mytoken', '');
  }

  getTokenFromStorage() {
    return localStorage.getItem('mytoken');
  }

  getTokenFromDB(token: string): boolean {
    this.activeUser = _.find(this.users, {token : token});

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
