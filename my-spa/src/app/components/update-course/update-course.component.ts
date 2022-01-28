import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  myForm: FormGroup;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private courseService: CourseService) { 
    this.myForm = formBuilder.group({
        'title' : [''],
        'summary': ['', [Validators.required]]
    })
  }

  id: string = '';
 
  ngOnInit() {

    // this.route.params.title;

    // console.log(this.route.params)

    this.route.queryParams

    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['title'])
      console.log(params['id'])
      this.id = params['id'];
      this.myForm.controls['title'].setValue(params['title'])
    });
  }

  
  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);

    this.courseService.updateCourse(this.id, this.myForm.value)
    .subscribe(res=> console.log(res));

    
  }

}
