import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthorizationService } from '../authorization.service';
import { User } from '../../model/user.model';

interface existsUser {
  email: string;
  pass: string;
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
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

  public confirmPass: boolean;
  public roles = ['User', 'Manager'];
  public user: User = {
      id: Date.now(),
      email: '',
      firstName: '',
      lastName: '',
      pass: '',
      role: this.roles[0]
    };
  public isRegistred: boolean;
  // private form = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   email: new FormControl(),
  //   pass: new FormControl(),
  //   passCheking: new FormControl(),
  //   role: new FormControl(),
  // });
  private form: FormGroup;
  private loginForm: FormGroup;
  constructor(private authorizationService: AuthorizationService,
              private router: Router,
              private formBuilder: FormBuilder) {
     this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      passCheking: ['', [ Validators.required, Validators.minLength(4)]],
      role: ''
    })

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.needRegister = false;
    this.isRegistred = false;



    this.passEqual = true;
    this.emailExists = false;
    this.authOptions = {
      userMail: null,
      userName: null,
      userPass: null,
      userConfirmPass: null,
    };


  }

  // user = {

  //   email: '',
  //   name: '',
  //   pass: '',
  //   role: this.roles[0]
  // };

  check(value) {
    console.log(value.controls.email.status)
    this.user.email ? value.controls.email.status = 'VALID' :
          value.controls.email.status = 'INVALID'
    console.log(value)
  }

  login() {
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
    console.log(this.user)
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
