import { Injectable } from '@angular/core';
import { TaskStore } from '@infrastructure/store/task.store';
import { TaskStore as TaslStoreOfRxAngular } from '@infrastructure/store_rx-angular/task.store';
import { TaskStoreState } from '@infrastructure/store_rx-angular/task.store';

@Injectable()
export class TaskStoreQuery {
  readonly task$ = this.taskStore.task$.asObservable();

  constructor(private taskStore: TaskStore) {}
}

@Injectable()
export class TaskStoreQueryForRxAngular {
  readonly state$ = this.taskStore.select();

  get state(): TaskStoreState {
    return this.taskStore.get();
  }

  constructor(private taskStore: TaslStoreOfRxAngular) {}
}
