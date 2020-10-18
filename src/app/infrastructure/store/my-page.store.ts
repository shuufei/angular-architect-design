import { Task } from '@model/task';
import { TaskRepository } from '@usecase/task/task-repository';
import { BehaviorSubject } from 'rxjs';

export class MyPageStore implements TaskRepository {
  readonly profile$ = new BehaviorSubject<{}>({});
  readonly task$ = new BehaviorSubject<Task | null>(null);
}
