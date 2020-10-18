import { Observable } from 'rxjs';
import { Task } from '@model/task';

export type GetTaskResponse = Task;

export abstract class TaskApiRepository {
  abstract fetch: (id: number) => Observable<GetTaskResponse>;
}
