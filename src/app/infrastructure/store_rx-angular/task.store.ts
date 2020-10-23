import { TaskRepositoryForRxAngular } from '@usecase/task/task-repository';
import { RxState } from '@rx-angular/state';
import { Task } from '@model/task';
import { Injectable } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';

const accumulatorForImmutable = <T>(state: T, slice: Partial<T>) => ({
  ...state,
  ...cloneDeep(slice),
});

export type TaskStoreState = {
  task: Task;
};

@Injectable()
export class TaskStore
  extends RxState<TaskStoreState>
  implements TaskRepositoryForRxAngular {
  constructor() {
    super();
    this.setAccumulator(accumulatorForImmutable);
  }
}
