import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '@model/task';
import { User } from '@model/user';
import { GetTaskResponse } from '@usecase/task/task-api-repository';

@Injectable()
export class ApiClientService {
  constructor() {}

  get(
    api: '/tasks/:taskId',
    pathParams: { taskId: number }
  ): Observable<GetTaskResponse> {
    const task =
      pathParams.taskId === 1
        ? new Task(
            1,
            'taskBBB',
            '個人的なTODOタスク',
            new User('me', 'me@hoge.com')
          )
        : new Task(
            1,
            'taskAAA',
            '今週中にやるタスク',
            new User('userZZZ', 'user-zzz@hoge.com')
          );
    return of(task);
  }
}
