import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[main page] task',
  props<{ task: string }>()
);
export const removeTask = createAction(
  '[main page] removeTask',
  props<{ taskIdx: number }>()
);
export const modifyTask = createAction(
  '[main page] modifyTask',
  props<{ taskIdx: number; taskValue: string }>()
);
