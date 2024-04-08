import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-app';
}
