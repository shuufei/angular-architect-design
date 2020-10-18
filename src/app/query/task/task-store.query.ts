import { Injectable } from '@angular/core';
import { TaskStore } from '@infrastructure/store/task.store';

@Injectable()
export class TaskStoreQuery {
  readonly task$ = this.taskStore.task$.asObservable();

  constructor(private taskStore: TaskStore) {}
}
