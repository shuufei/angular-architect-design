import { Injectable } from '@angular/core';
import {
  GetTaskResponse,
  TaskApiRepository,
} from '@usecase/task/task-api-repository';
import { Observable } from 'rxjs';
import { ApiClientService } from '../api-client.service';

@Injectable()
export class TaskApiClientService implements TaskApiRepository {
  constructor(private apiClient: ApiClientService) {}

  fetch(id: number): Observable<GetTaskResponse> {
    return this.apiClient.get('/tasks/:taskId', { taskId: id });
  }
}
