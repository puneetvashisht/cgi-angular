import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    // if successfully authenticated ..
    // navigate to view course component
    this.router.navigate(['courses'])

    // eslse if not authenticated
    // stay on same page and display an alert message

  }

}
