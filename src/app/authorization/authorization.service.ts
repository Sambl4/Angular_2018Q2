import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isLogged: boolean = false;

  constructor() { }

  getIsLogged() {
    return this.isLogged;
  }



}
