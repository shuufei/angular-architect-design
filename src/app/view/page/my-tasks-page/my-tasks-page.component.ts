import { Component, OnInit } from '@angular/core';
import { MyPageStoreQuery } from '@query/mypage/mypage-store.query';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';

@Component({
  selector: 'app-my-tasks-page',
  templateUrl: './my-tasks-page.component.html',
  styleUrls: ['./my-tasks-page.component.scss'],
})
export class MyTasksPageComponent implements OnInit {
  readonly task$ = this.myPageStoreQuery.task$;

  constructor(
    private myPageStoreQuery: MyPageStoreQuery,
    private loadTaskUsecase: LoadTaskUsecase
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(1).subscribe();
  }
}
