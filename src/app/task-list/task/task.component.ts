import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { modifyTask, removeTask } from '../../tasks/task.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  editable: boolean = false;
  @Input() taskValue: string = '';
  @Input() taskIdx!: number;
  @ViewChild('inputField') inputField!: ElementRef;
  constructor(private store: Store<{ task: string[] }>) {}

  onRemoveTask(taskIdx: number) {
    this.store.dispatch(removeTask({ taskIdx: taskIdx }));
  }

  setEdit() {
    this.editable = true;
  }

  onAcceptModification(taskIdx: number): void {
    const inputValue = this.inputField.nativeElement.value;
    this.store.dispatch(
      modifyTask({
        taskIdx: taskIdx,
        taskValue: inputValue,
      })
    );
    this.editable = false;
  }
}
