import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authListenerSubs: Subscription | undefined;
  title = 'my-spa';
  userIsAuthenticated: boolean = false;
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.userIsAuthenticated = this.loginService.getIsAuth();

    this.authListenerSubs = this.loginService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        console.log('*** ng On Init ----', this.userIsAuthenticated);
      });
  }



}


