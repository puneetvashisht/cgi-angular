import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username' : ['Puneet', [Validators.required, this.sampleValidator]],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      'password': ['', Validators.minLength(6)],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    })
  }

  ngOnInit(): void {
  }

  sampleValidator(control: FormControl): ValidationErrors | null {
    if(control.value == 'test'){
      return {invalidText: true}
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value == 'example'){
          resolve({invalidText: true})
        }
        else{
          resolve(null);
        }
      }, 5000)
    })
    return promise;
  }

  genders= ['male','female']

  get hobbies(){
    return this.myForm.get('hobbies') as FormArray
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    
  }

}
