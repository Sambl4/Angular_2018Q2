import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../../authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public userName: string;

  isLogged: boolean;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.isLogged = this.authorizationService.IsAuthenticated();
    if (this.isLogged) {
      this.userName = this.authorizationService.GetUserInfo();
    }
  }

}
