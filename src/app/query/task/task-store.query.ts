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
  // ComponentをStoreに依存させないようにするなら、selectとgetを公開しない方がいいかもしれない
  readonly select = this.store.select.bind(this.store);
  readonly get = this.store.get.bind(this.store);
  constructor(private store: RxState<T>) {}
}

@Injectable()
export class TaskStoreQueryForRxAngular extends StoreQuery<TaskStoreState> {
  constructor(taskStore: TaskStoreOfRxAngular) {
    super(taskStore);
  }
}
