import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksPageComponent } from './my-tasks-page.component';
import { MyTasksPageRoutingModule } from './my-tasks-page-routing.module';
import { MyPageStore } from '@infrastructure/store/my-page.store';
import { MyPageStoreQuery } from '@query/mypage/mypage-store.query';
import { TaskCardModule } from '@view/component/presentation/task-card/task-card.module';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';
import { TaskRepository } from '@usecase/task/task-repository';
import { TaskApiClientService } from '@infrastructure/api/task/task-api-client.service';
import { TaskApiRepository } from '@usecase/task/task-api-repository';
import { ApiClientService } from '@infrastructure/api/api-client.service';

const store = new MyPageStore();

// 下記のnewする記法じゃないと、usecaseにinjectされるrepositoryがTaskRepositoryをimplementsしたものであるという制約をはれない
const loadTaskUsecase = new LoadTaskUsecase(
  new TaskApiClientService(new ApiClientService()),
  store
);

@NgModule({
  declarations: [MyTasksPageComponent],
  imports: [CommonModule, MyTasksPageRoutingModule, TaskCardModule],
  providers: [
    MyPageStoreQuery,
    {
      provide: LoadTaskUsecase,
      useValue: loadTaskUsecase,
    },
    {
      provide: MyPageStore,
      useValue: store,
    },
  ],
})
export class MyTasksPageModule {}
