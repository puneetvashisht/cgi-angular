import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {}
  authListenerSubs: Subscription | undefined;

  userIsAuthenticated: boolean = false;

  ngOnInit() {
    this.userIsAuthenticated = this.loginService.getIsAuth();

    this.authListenerSubs = this.loginService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        console.log('*** ng On Init ----', this.userIsAuthenticated);
      });
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.loginService.login(form.value.email, form.value.password);
    if (this.userIsAuthenticated) {
      this.router.navigate(['courses']);
    }
  }

}
