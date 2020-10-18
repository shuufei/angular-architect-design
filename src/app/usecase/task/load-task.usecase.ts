import { Task } from '@model/task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaskRepository } from './task-repository';
import { TaskApiRepository } from './task-api-repository';

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
