import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '@model/task';
import { TaskRepository } from '@usecase/task/task-repository';

@Injectable()
export class TaskStore implements TaskRepository {
  readonly task$ = new BehaviorSubject<Task | null>(null);

  constructor() {}
}
