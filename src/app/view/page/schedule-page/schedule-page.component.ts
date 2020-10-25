import { Component, OnInit } from '@angular/core';
import {
  TaskStoreQuery,
  TaskStoreQueryForNgrx,
  TaskStoreQueryForRxAngular,
} from '@query/task/task-store.query';
import {
  LoadTaskUsecase,
  LoadTaskUsecaseForRxAngular,
} from '@usecase/task/load-task.usecase';
import { pluck } from 'rxjs/operators';
import { LoadTaskUsecaseForNgrx } from '@usecase/task/load-task.usecase';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
})
export class SchedulePageComponent implements OnInit {
  // readonly task$ = this.taskStateQuery.select('task');
  readonly task$ = this.taskStateQuery.task$;

  constructor(
    // private taskStateQuery: TaskStoreQuery,
    // private loadTaskUsecase: LoadTaskUsecase
    // private taskStateQuery: TaskStoreQueryForRxAngular,
    // private loadTaskUsecase: LoadTaskUsecaseForRxAngular
    private taskStateQuery: TaskStoreQueryForNgrx,
    private loadTaskUsecase: LoadTaskUsecaseForNgrx
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(1).subscribe();
  }
}
