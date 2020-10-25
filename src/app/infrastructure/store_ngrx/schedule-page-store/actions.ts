import { ActionCreator, createAction, props } from '@ngrx/store';
import { Task } from '@model/task';
import { LoadTaskSuccessAction } from '@usecase/task/load-task.usecase';

export const loadTaskSuccess: LoadTaskSuccessAction = createAction(
  '[Schedule Page] Load Task Success',
  props<{ task: Task }>()
);
