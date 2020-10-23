import { Task } from '@model/task';
import { BehaviorSubject } from 'rxjs';
import { RxState } from '@rx-angular/state';

export abstract class TaskRepository {
  abstract task$: BehaviorSubject<Task | null>;
}

export abstract class TaskRepositoryForRxAngular extends RxState<{
  task: Task;
}> {}
