import { createAction, props } from '@ngrx/store';
import { Task } from '@model/task';

export const loadTaskSuccess = createAction(
  '[Project Page] Load Task Success',
  props<{ task: Task }>()
);
