import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8000/courses/'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }


  addCourse(course: any){
    return  this.http.post(baseURL , course)
  }

  updateCourse(id: string, course: any){
    return this.http.patch(baseURL + id, course)
  }  

  fetchAllCourses(): Observable<any>{
    return this.http.get(baseURL)
  }

  deleteCourse(id: number){
    return this.http.delete(baseURL + id)
  }

}
