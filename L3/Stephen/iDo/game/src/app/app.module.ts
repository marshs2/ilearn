import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AppComponent,JokeComponent,JokeListComponent,JokeFormComponent } from './app.component';

@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule],
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
