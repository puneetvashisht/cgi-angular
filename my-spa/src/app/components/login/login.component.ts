import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value)
    this.loginService.login(form.value.email, form.value.password)
    .subscribe((response: any) => {
      console.log(response.auth)
      if(response.auth){
        this.router.navigate(['courses'])
      }
      
    });
    
  }

  // login(){
  //   // if successfully authenticated ..
  //   // navigate to view course component
  //   this.router.navigate(['courses'])

  //   // eslse if not authenticated
  //   // stay on same page and display an alert message

  // }

}
