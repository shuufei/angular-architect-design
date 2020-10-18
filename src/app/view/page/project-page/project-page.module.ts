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
import { TaskStoreQuery } from '@query/task/task-store.query';
import { ApiClientService } from '@infrastructure/api/api-client.service';

const taskStore = new TaskStore();

// 下記のnewする記法じゃないと、usecaseにinjectされるrepositoryがTaskRepositoryをimplementsしたものであるという制約をはれない
const loadTaskUsecase = new LoadTaskUsecase(
  new TaskApiClientService(new ApiClientService()),
  taskStore
);

@NgModule({
  declarations: [ProjectPageComponent],
  exports: [ProjectPageComponent],
  imports: [CommonModule, ProjectPageRoutingModule, TaskCardModule],
  providers: [
    TaskStoreQuery,
    {
      provide: LoadTaskUsecase,
      useValue: loadTaskUsecase,
    },
    {
      provide: TaskStore,
      useValue: taskStore,
    },
  ],
})
export class ProjectPageModule {}
