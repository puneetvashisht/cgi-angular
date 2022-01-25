import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { MessageComponent } from './message.component';
import { CardComponent } from './card/card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, CardComponent, DropdownComponent, HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
