import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleModule } from './article.module';
import { ArticleComponent } from './components/article/article.component';
import { Article1Component } from './components/article1/article1.component';
import { Article2Component } from './components/article2/article2.component';

const routes: Routes = [
  {
    path: '', 
    component: ArticleComponent,
    children: [
      {path: 'article1', component:Article1Component},
      {path: 'article2', component:Article2Component}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
