import { Task } from '@model/task';
import { Action, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { loadTaskSuccess } from './actions';
export type State = {
  task?: Task;
};

export const initialState: State = {};

const schedulePageReducer = createReducer(
  initialState,
  on(loadTaskSuccess, (state, props) =>
    produce(state, (draft) => {
      draft.task = props.task;
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return schedulePageReducer(state, action);
}

export const featureKey = 'schedule-page';
