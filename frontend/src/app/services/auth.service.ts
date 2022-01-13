import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService
      .loginPopup()
      .subscribe((response: AuthenticationResult) => {
        console.log(response);
        this.msalService.instance.setActiveAccount(response.account);
      });
  }
}
