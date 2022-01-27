import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { MessageComponent } from './message.component';
import { CardComponent } from './card/card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HighlightDirective } from './highlight.directive';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { LogService } from './log.service';



@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, CardComponent, DropdownComponent, HighlightDirective, FirstComponent, SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
