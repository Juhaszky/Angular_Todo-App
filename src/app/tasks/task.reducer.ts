import { createReducer, on } from '@ngrx/store';
import { addTask, modifyTask, removeTask } from './task.actions';

export const initialTask: string[] = [];

export const taskReducer = createReducer(
  initialTask,
  on(addTask, (state, value) => {
    return [...state, value.task];
  }),
  on(removeTask, (state, value) => {
    console.log(state);
    return state.filter((task, i) => i !== value.taskIdx);
  }),
  on(modifyTask, (state, action) => {
    const newState = [...state];
    newState[action.taskIdx] = action.taskValue;
    return newState;
  })
);
