import { Task } from '@model/task';
import { Action, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { loadTaskSuccess } from './actions';
export type State = {
  task?: Task;
};

export const initialState: State = {};

const projectPageReducer = createReducer(
  initialState,
  on(loadTaskSuccess, (state, props) => {
    console.log('ngrx store');
    return produce(state, (draft) => {
      draft.task = props.task;
    });
  })
);

export function reducer(state: State | undefined, action: Action) {
  return projectPageReducer(state, action);
}

export const featureKey = 'project-page';
