import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class AddCourseComponent {


  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { 
    this.myForm = formBuilder.group({
        'title' : ['', [Validators.required, Validators.minLength(6)]],
        'summary': ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);

    let sampleCourse: any = {title: 'Sample', summary: 'sample summary......'}
    console.log('Adding a course', sampleCourse)
    // http-post request with sampleCourse as body
    // this.http.post('http://localhost:3000/courses' , this.myForm.value)
    this.courseService.addCourse(this.myForm.value)
    .subscribe(res=> {
      console.log(res);
    })
    
  }

 

}
