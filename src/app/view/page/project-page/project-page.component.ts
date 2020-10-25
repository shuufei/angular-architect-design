import { Component, OnInit } from '@angular/core';
// import { TaskStoreQuery } from '@query/task/task-store.query';
// import { LoadTaskUsecase, LoadTaskUsecaseForNgrx } from '@usecase/task/load-task.usecase';
import { pluck } from 'rxjs/operators';
import {
  TaskStoreQueryForRxAngular,
  TaskStoreQueryForNgrx,
} from '@query/task/task-store.query';
import { LoadTaskUsecaseForNgrx } from '@usecase/task/load-task.usecase';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  readonly task$ = this.taskStateQuery.task$;

  constructor(
    // private taskStateQuery: TaskStoreQuery,
    // private loadTaskUsecase: LoadTaskUsecase
    // private taskStateQuery: TaskStoreQueryForRxAngular,
    // private loadTaskUsecase: LoadTaskUsecaseForRxAngular,
    private taskStateQuery: TaskStoreQueryForNgrx,
    private loadTaskUsecase: LoadTaskUsecaseForNgrx
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(2).subscribe();
  }
}
