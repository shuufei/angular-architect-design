import { Injectable } from '@angular/core';
import { TaskRepository } from './task-repository';

@Injectable()
export class TaskRepositoryQuery {
  readonly task$ = this.taskRepository.task$.asObservable();

  constructor(private taskRepository: TaskRepository) {}
}
