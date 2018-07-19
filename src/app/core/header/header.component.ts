import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../../authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit, OnDestroy {
@Input() public isAuthPath: boolean;
  public userName: string;
  public subscription: Subscription;

  isLogged: boolean;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.subscription = this.authorizationService.isAuthenticated
                      .subscribe(result => this.isLoggedUpdate(result));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isAuthenticatedDetect(state: boolean) {
    console.log('state', state)
  }

  logout() {
    this.authorizationService.Logout();
  }

  private isLoggedUpdate(result: boolean) {
    if (result) {
      this.userName = this.authorizationService.GetUserInfo().userName;
    }
    this.isLogged = result;
  }
}
