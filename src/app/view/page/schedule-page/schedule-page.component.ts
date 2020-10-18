import { Component, OnInit } from '@angular/core';
import { TaskRepositoryQuery } from '@query/task/task-repository.query';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
})
export class SchedulePageComponent implements OnInit {
  readonly task$ = this.taskStateQuery.task$;

  constructor(
    private taskStateQuery: TaskRepositoryQuery,
    private loadTaskUsecase: LoadTaskUsecase
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(1).subscribe();
  }
}
