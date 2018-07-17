import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  public needRegister: boolean;
  public userExist: boolean;
  public validated: boolean;
  public authOptions: {
    userMail: string;
    userName: string,
    userPass: string,
    userConfirmPass: string,
  }
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.needRegister = false;
    this.authOptions = {
      userMail: null,
      userName: null,
      userPass: null,
      userConfirmPass: null,
    }
  }

  login() {
    if( this.authOptions && this.authOptions.userMail && this.authOptions.userPass) {
      this.userExist = this.authorizationService.Login(this.authOptions);
      this.validated = true;
      console.log('logged in successfully');
    } else {
      this.validated = false;
    }
  }

}
