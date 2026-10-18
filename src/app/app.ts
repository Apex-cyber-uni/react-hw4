import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list-component/user-list-component';
import { ToDoListComponent } from './to-do-list-component/to-do-list-component';
import { FilmsComponent } from './films-component/films-component';

@Component({
  imports: [RouterOutlet, UserListComponent, ToDoListComponent, FilmsComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
