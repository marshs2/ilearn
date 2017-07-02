import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {JokeComponent,JokeListComponent,JokeFormComponent } from './app.component';

@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule],
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppComponent {
}

platformBrowserDynamic().bootstrapModule(AppModule);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
