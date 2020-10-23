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
import { TaskStore as TaskStoreForRxAngular } from '@infrastructure/store_rx-angular/task.store';
import { LoadTaskUsecaseForRxAngular } from '@usecase/task/load-task.usecase';
import { TaskStoreQueryForRxAngular } from '@query/task/task-store.query';

const taskStore = new TaskStore();
const taskStoreForRxAngular = new TaskStoreForRxAngular();

// 下記のnewする記法じゃないと、usecaseにinjectされるrepositoryがTaskRepositoryをimplementsしたものであるという制約をはれない
const loadTaskUsecase = new LoadTaskUsecase(
  new TaskApiClientService(new ApiClientService()),
  taskStore
);

const loadTaskUsecaseForRxAngular = new LoadTaskUsecaseForRxAngular(
  new TaskApiClientService(new ApiClientService()),
  taskStoreForRxAngular
);

const taskQuery = new TaskStoreQueryForRxAngular(taskStoreForRxAngular);

@NgModule({
  declarations: [ProjectPageComponent],
  exports: [ProjectPageComponent],
  imports: [CommonModule, ProjectPageRoutingModule, TaskCardModule],
  providers: [
    // TaskStoreQuery,
    // {
    //   provide: LoadTaskUsecase,
    //   useValue: loadTaskUsecase,
    // },
    // {
    //   provide: TaskStore,
    //   useValue: taskStore,
    // },
    { provide: TaskStoreQueryForRxAngular, useValue: taskQuery },
    {
      provide: LoadTaskUsecaseForRxAngular,
      useValue: loadTaskUsecaseForRxAngular,
    },
    {
      provide: TaskStoreForRxAngular,
      useValue: taskStoreForRxAngular,
    },
  ],
})
export class ProjectPageModule {}
