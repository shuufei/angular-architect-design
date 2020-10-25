import { Inject, Injectable, InjectionToken } from '@angular/core';
import { TaskStore } from '@infrastructure/store/task.store';
import { TaskStore as TaskStoreOfRxAngular } from '@infrastructure/store_rx-angular/task.store';
import { TaskStoreState } from '@infrastructure/store_rx-angular/task.store';
import { DefaultProjectorFn, MemoizedSelector, Store } from '@ngrx/store';
import { RxState } from '@rx-angular/state';
import { Task } from '@model/task';

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

export type TaskSelector = MemoizedSelector<
  { [key: string]: { task: Task } },
  Task | undefined,
  DefaultProjectorFn<Task | undefined>
>;

export const TASK_SELECTOR = new InjectionToken<TaskSelector>('Task Selector');

@Injectable()
export class TaskStoreQueryForNgrx {
  readonly task$ = this.store.select(this.selector);

  constructor(
    private store: Store<{ [key: string]: { task: Task } }>,
    @Inject(TASK_SELECTOR) private selector: TaskSelector
  ) {}
}
