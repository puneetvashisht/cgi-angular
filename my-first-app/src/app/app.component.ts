import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showCourses: boolean = false;

  courses: Array<any> = [
    {title: 'Angular', summary: 'Framework from google!'},
    {title: 'React', summary: 'Library from facebook!'},
    {title: 'NodeJS', summary: 'Server side JS!'},
    {title: 'Ember', summary: 'Open source front-end!'}
  ]

  show(){
    this.showCourses = true;
  }

  hide(){
    this.showCourses = false;
  }

  handleCourseDeletion(title: string){
    console.log('In the parent component ', title);
    let filteredList = this.courses.filter((course)=> course.title!=title)
    this.courses = filteredList;
  }
}
