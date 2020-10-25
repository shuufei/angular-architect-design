import { Task } from '@model/task';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaskRepository, TaskRepositoryForRxAngular } from './task-repository';
import { TaskApiRepository } from './task-api-repository';
import { ActionCreator, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class LoadTaskUsecase {
  constructor(
    private taskApiRepository: TaskApiRepository,
    private taskRepository: TaskRepository
  ) {}

  execute(id: number): Observable<Task> {
    return this.taskApiRepository
      .fetch(id)
      .pipe(tap((response) => this.taskRepository.task$.next(response)));
  }
}

@Injectable()
export class LoadTaskUsecaseForRxAngular {
  constructor(
    private taskApiRepository: TaskApiRepository,
    private taskRepository: TaskRepositoryForRxAngular
  ) {}

  execute(id: number): Observable<Task> {
    return this.taskApiRepository
      .fetch(id)
      .pipe(tap((response) => this.taskRepository.set('task', () => response)));
  }
}

export type LoadTaskSuccessAction = ActionCreator<
  string,
  (props: { task: Task }) => { task: Task } & TypedAction<string>
>;

export const LOAD_TASK_ACTION = new InjectionToken<LoadTaskSuccessAction>(
  'load task action'
);

@Injectable()
export class LoadTaskUsecaseForNgrx {
  constructor(
    private taskApiRepository: TaskApiRepository,
    private store: Store,
    @Inject(LOAD_TASK_ACTION) private action: LoadTaskSuccessAction
  ) {}

  execute(id: number): Observable<Task> {
    return this.taskApiRepository.fetch(id).pipe(
      tap((response) => {
        this.store.dispatch(this.action({ task: response }));
      })
    );
  }
}
