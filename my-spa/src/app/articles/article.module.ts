import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Article1Component } from './components/article1/article1.component';
import { Article2Component } from './components/article2/article2.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
    imports: [   ArticleRoutingModule],
    declarations: [  Article1Component, Article2Component, ArticleComponent ]
    // bootstrap:    [ appComponentName ]
})
export class ArticleModule { }