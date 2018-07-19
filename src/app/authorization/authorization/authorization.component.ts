import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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
  public goBack: any;
  public authOptions: {
    userMail: string;
    userName: string,
    userPass: string,
    userConfirmPass: string,
  };
  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.needRegister = false;
    this.authOptions = {
      userMail: null,
      userName: null,
      userPass: null,
      userConfirmPass: null,
    };
  }

  login() {
    if (this.authOptions && this.authOptions.userMail && this.authOptions.userPass) {
      this.userExist = this.authorizationService.Login(this.authOptions);
        if(this.userExist) {
          console.log('logged in successfully');
          this.router.navigate(['../coursesList']);
          // this.validated = true;
          return;
        }
      this.validated = true;
    }
  }

}
