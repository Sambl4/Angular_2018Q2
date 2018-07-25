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
  public isValid: boolean;
  public isValidated: boolean;
  public emailExists: boolean;
  public passEqual: boolean;
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
    this.passEqual = true;
    this.emailExists = false;
    this.authOptions = {
      userMail: null,
      userName: null,
      userPass: null,
      userConfirmPass: null,
    };
  }
  roles = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  user = {
    email: 'Dr.',
    name: '',
    mainPass: 'Dr. What',
    role: this.roles[0]
  };

  login(event: Event) {
    // if (this.authOptions && this.authOptions.userMail && this.authOptions.userPass) {
    //   this.isValid = this.authorizationService.Login(this.authOptions);
    //     if(this.isValid) {
    //       console.log('logged in successfully');
    //       this.router.navigate(['../coursesList']);
    //       // this.isValidated = true;
    //       return;
    //     };
    // } else {
    //   this.isValid = false;
    // };
    // this.isValidated = true;
    // event.preventDefault();
    // event.stopPropagation();
    console.log(event)
  }

  registration() {
    if (this.authOptions && this.authOptions.userMail && this.authOptions.userName &&
      this.authOptions.userPass && this.authOptions.userConfirmPass) {

        this.emailExists = this.authorizationService.isEmailExist(this.authOptions.userMail);
        // this.emailExists ? this.isValid = false : this.isValid = true;

        this.passEqual = this.authOptions.userPass === this.authOptions.userConfirmPass;
        // this.passEqual ? this.isValid = true : this.isValid = false;
        // if (this.emailExists && this.authOptions.userPass === this.authOptions.userConfirmPass) {
      if (!this.emailExists && this.passEqual) {
        console.log('registred')
        this.passEqual = true;
        this.isValid = true;
      } else {
        this.passEqual = false;
        this.isValid = false;
      }
    } else {
      this.isValid = false;
    }
    this.isValidated = true;
  }

}
