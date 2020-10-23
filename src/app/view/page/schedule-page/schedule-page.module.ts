import { NgModule } from '@angular/core';

import { SchedulePageComponent } from './schedule-page.component';
import { SchedulePageRoutingModule } from './schedule-page-routing.module';
import { TaskCardModule } from '@view/component/presentation/task-card/task-card.module';
import { TaskApiClientService } from '@infrastructure/api/task/task-api-client.service';
import { TaskStore } from '@infrastructure/store/task.store';
import {
  TaskStoreQuery,
  TaskStoreQueryForRxAngular,
} from '@query/task/task-store.query';
import {
  LoadTaskUsecase,
  LoadTaskUsecaseForRxAngular,
} from '@usecase/task/load-task.usecase';
import { CommonModule } from '@angular/common';
import { TaskApiClientModule } from '@infrastructure/api/task/task-api-client.module';
import { ApiClientService } from '@infrastructure/api/api-client.service';
import { TaskStore as TaskStoreForRxAngular } from '@infrastructure/store_rx-angular/task.store';

const taskStore = new TaskStore();
const taskStoreForRxAngular = new TaskStoreForRxAngular();

// const loadTaskUsecaseProviders = [
//   LoadTaskUsecase,
//   {
//     provide: TaskRepository,
//     useValue: taskStore,
//   },
//   {
//     provide: TaskApiRepository,
//     useClass: TaskApiClientService,
//   },
// ];
// const TaskStoreQueryProviders = [TaskStoreQuery];

// 下記のnewする記法じゃないと、usecaseにinjectされるrepositoryがTaskRepositoryをimplementsしたものであるという制約をはれない
const loadTaskUsecase = new LoadTaskUsecase(
  new TaskApiClientService(new ApiClientService()),
  taskStore
);

const loadTaskUsecaseForRxAngular = new LoadTaskUsecaseForRxAngular(
  new TaskApiClientService(new ApiClientService()),
  taskStoreForRxAngular
);

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
    // TaskStoreQuery,
    // {
    //   provide: LoadTaskUsecase,
    //   useValue: loadTaskUsecase,
    // },
    // {
    //   provide: TaskStore,
    //   useValue: taskStore,
    // },
    TaskStoreQueryForRxAngular,
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
export class SchedulePageModule {}
