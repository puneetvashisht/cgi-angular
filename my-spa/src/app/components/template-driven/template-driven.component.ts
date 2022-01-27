import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  genders  =  ['male', 'female']

  user = {
    username: 'Puneet Vashisht',
    email: 'puneetvashisht@icloud.com',
    password: 'testtest',
    gender: 'male'
  }

  onSubmit(form: NgForm){
    console.log(form);
    console.log(this.user);
  }

}
