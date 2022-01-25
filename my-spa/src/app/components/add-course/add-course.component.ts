import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  constructor(private http: HttpClient) { }

  addCourse(){
    let sampleCourse: any = {title: 'Sample', summary: 'sample summary......'}
    console.log('Adding a course', sampleCourse)
    // http-post request with sampleCourse as body
    this.http.post('http://localhost:3000/courses' , sampleCourse)
    .subscribe(res=> {
      console.log(res);
    })
  }

}
