// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component'; // Update the path
import { TodoformComponent } from './todoform/todoform.component';

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full' }, // Default route
  { path: 'todolist', component: TodolistComponent },
  { path: 'todoform', component: TodoformComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
