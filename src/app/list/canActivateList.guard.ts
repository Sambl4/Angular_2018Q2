import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthorizationService } from '../authorization/authorization.service';


@Injectable()
export class CanActivateList implements CanActivate {
private isAuthenticated: any;
  public subscription: Subscription;
  constructor(private router: Router, private authorizationService: AuthorizationService) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.subscription = this.authorizationService.isAuthenticated
                      .subscribe(result => this.isAuthenticated = result ? true : false);
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['../authorization']);
      return false;
    }
  }
}
