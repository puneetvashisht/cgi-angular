import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    console.log('Component is initialized...');
    this.courseService.fetchAllCourses()
    .subscribe(res=>{
      this.courses = res;
    })
  }

  courses: Array<any> = []


  handleCourseDeletion(title: string){
    console.log('In the parent component ', title);
    let remainingList = this.courses.filter((course)=> course.title!=title)
    let matchedCourse = this.courses.filter((course)=> course.title==title)
    console.log(matchedCourse[0].id);


    this.courses = remainingList;

    // http delete
    // this.http.delete('http://localhost:3000/courses/' + matchedCourse[0].id)
    this.courseService.deleteCourse(matchedCourse[0].id)
    .subscribe(res=> {
      console.log(res);
    })
  }

}
