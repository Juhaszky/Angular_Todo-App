import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { addTask } from '../tasks/task.actions';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  value!: string;

  constructor(private store: Store<{ task: string }>) {}

  onAddTask() {
    const isFormValid = this.validateForm();

    if (isFormValid) {
      this.store.dispatch(addTask({ task: this.value.trim() }));
      this.resetFormValue();
    } else {
      alert('You must provide a non-empty value!');
      this.resetFormValue();
      return;
    }
  }
  private validateForm(): boolean {
    return !this.value || !this.value.trim() ? false : true;
  }
  private resetFormValue(): void {
    this.value = '';
  }
}
