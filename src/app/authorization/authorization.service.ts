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

  constructor() { }

  Login() {

  }

  Logout() {

  }

  IsAuthenticated(): boolean {
    return true;
  }

  GetUserInfo() {
    return this.authInfo.userName;
  }
}
