import { NgModule } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { TaskApiClientService } from './task-api-client.service';

@NgModule({
  providers: [ApiClientService, TaskApiClientService],
})
export class TaskApiClientModule {}
