import { Injectable } from '@angular/core';
import { TaskStore } from '@infrastructure/store/task.store';
import { TaskStore as TaskStoreOfRxAngular } from '@infrastructure/store_rx-angular/task.store';
import { TaskStoreState } from '@infrastructure/store_rx-angular/task.store';
import { RxState } from '@rx-angular/state';

@Injectable()
export class TaskStoreQuery {
  readonly task$ = this.taskStore.task$.asObservable();

  constructor(private taskStore: TaskStore) {}
}

class StoreQuery<T extends {}> {
  readonly state$ = this.store.select();
  get state(): T {
    return this.store.get();
  }
  constructor(private store: RxState<T>) {}
}

@Injectable()
export class TaskStoreQueryForRxAngular extends StoreQuery<TaskStoreState> {
  constructor(taskStore: TaskStoreOfRxAngular) {
    super(taskStore);
  }
}
