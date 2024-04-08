import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks$: Observable<string[]>;
  
  constructor(private store: Store<{ task: string[] }>) {
    this.tasks$ = this.store.select('task');
  }
}
