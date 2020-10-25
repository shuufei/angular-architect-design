import { NgModule } from '@angular/core';

import { SchedulePageComponent } from './schedule-page.component';
import { SchedulePageRoutingModule } from './schedule-page-routing.module';
import { TaskCardModule } from '@view/component/presentation/task-card/task-card.module';
import { TaskApiClientService } from '@infrastructure/api/task/task-api-client.service';
import { TaskStore } from '@infrastructure/store/task.store';
import {
  TaskStoreQuery,
  TaskStoreQueryForRxAngular,
  TASK_SELECTOR,
} from '@query/task/task-store.query';
import {
  LoadTaskUsecase,
  LoadTaskUsecaseForRxAngular,
} from '@usecase/task/load-task.usecase';
import { CommonModule } from '@angular/common';
import { TaskApiClientModule } from '@infrastructure/api/task/task-api-client.module';
import { ApiClientService } from '@infrastructure/api/api-client.service';
import { TaskStore as TaskStoreForRxAngular } from '@infrastructure/store_rx-angular/task.store';
import { StoreModule } from '@ngrx/store';
import { TaskApiRepository } from '@usecase/task/task-api-repository';
import {
  LoadTaskUsecaseForNgrx,
  LOAD_TASK_ACTION,
} from '@usecase/task/load-task.usecase';
import { loadTaskSuccess } from '@infrastructure/store_ngrx/schedule-page-store/actions';
import { TaskStoreQueryForNgrx } from '@query/task/task-store.query';
import {
  featureKey,
  reducer,
} from '@infrastructure/store_ngrx/schedule-page-store/reducer';
import { selectTask } from '@infrastructure/store_ngrx/schedule-page-store/selectors';

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

const taskQuery = new TaskStoreQueryForRxAngular(taskStoreForRxAngular);

@NgModule({
  declarations: [SchedulePageComponent],
  exports: [SchedulePageComponent],
  imports: [
    CommonModule,
    SchedulePageRoutingModule,
    TaskCardModule,
    TaskApiClientModule,
    StoreModule.forFeature(featureKey, reducer),
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
    // { provide: TaskStoreQueryForRxAngular, useValue: taskQuery },
    // {
    //   provide: LoadTaskUsecaseForRxAngular,
    //   useValue: loadTaskUsecaseForRxAngular,
    // },
    // {
    //   provide: TaskStoreForRxAngular,
    //   useValue: taskStoreForRxAngular,
    // },
    {
      provide: TaskApiRepository,
      useClass: TaskApiClientService,
    },
    LoadTaskUsecaseForNgrx,
    {
      provide: LOAD_TASK_ACTION,
      useValue: loadTaskSuccess,
    },
    {
      provide: TASK_SELECTOR,
      useValue: selectTask,
    },
    TaskStoreQueryForNgrx,
  ],
})
export class SchedulePageModule {}
