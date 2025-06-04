import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoformComponent } from './todoform/todoform.component'; // Import the TodoFormComponent
import { TodolistComponent } from './todolist/todolist.component'; // Import the TodolistComponent

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,TodoformComponent,TodolistComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
