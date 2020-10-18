import { Task } from '@model/task';
import { BehaviorSubject } from 'rxjs';

export abstract class TaskRepository {
  abstract task$: BehaviorSubject<Task | null>;
}
