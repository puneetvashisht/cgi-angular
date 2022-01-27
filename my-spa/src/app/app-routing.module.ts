import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DataDrivenComponent } from './components/data-driven/data-driven.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfount.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'courses', component: CoursesComponent},
  {path:'addcourse', component: AddCourseComponent},
  {path:'updatecourse/:title/:id', component: UpdateCourseComponent},
  {path:'templated', component: TemplateDrivenComponent},
  {path:'datad', component: DataDrivenComponent},
  {path:'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
