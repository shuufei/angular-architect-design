import { NgModule } from '@angular/core';

import { SchedulePageComponent } from './schedule-page.component';
import { SchedulePageRoutingModule } from './schedule-page-routing.module';
import { TaskCardModule } from '@view/component/presentation/task-card/task-card.module';
import { TaskApiClientService } from '@infrastructure/api/task/task-api-client.service';
import { TaskStore } from '@infrastructure/store/task.store';
import { TaskRepository } from '@query/task/task-repository';
import { TaskRepositoryQuery } from '@query/task/task-repository.query';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';
import { TaskApiRepository } from '@usecase/task/task-api-repository';
import { CommonModule } from '@angular/common';
import { TaskApiClientModule } from '@infrastructure/api/task/task-api-client.module';

const taskStore = new TaskStore();

const loadTaskUsecaseProviders = [
  LoadTaskUsecase,
  {
    provide: TaskRepository,
    useValue: taskStore,
  },
  {
    provide: TaskApiRepository,
    useClass: TaskApiClientService,
  },
];

const taskRepositoryQueryProviders = [
  TaskRepositoryQuery,
  {
    provide: TaskRepository,
    useValue: taskStore,
  },
];

@NgModule({
  declarations: [SchedulePageComponent],
  exports: [SchedulePageComponent],
  imports: [
    CommonModule,
    SchedulePageRoutingModule,
    TaskCardModule,
    TaskApiClientModule,
  ],
  providers: [
    ...loadTaskUsecaseProviders,
    ...taskRepositoryQueryProviders,
    {
      provide: TaskStore,
      useValue: taskStore,
    },
  ],
})
export class SchedulePageModule {}
