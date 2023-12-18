import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GrandChild, GrandParent, Parent } from './app.component';

@NgModule({
  declarations: [
   GrandChild,
   Parent,
   GrandParent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GrandParent]
})
export class AppModule { }
