import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPageComponent } from './project-page.component';
import { ProjectPageRoutingModule } from './project-page-routing.module';
import { TaskCardModule } from '@view/component/presentation/task-card/task-card.module';
import { TaskStore } from '@infrastructure/store/task.store';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';
import { TaskApiClientModule } from '@infrastructure/api/task/task-api-client.module';
import { TaskRepository } from '@usecase/task/task-repository';
import { TaskApiRepository } from '@usecase/task/task-api-repository';
import { TaskApiClientService } from '@infrastructure/api/task/task-api-client.service';
import { TaskRepositoryQuery } from '@query/task/task-repository.query';

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
  declarations: [ProjectPageComponent],
  exports: [ProjectPageComponent],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
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
export class ProjectPageModule {}
