import { Component, OnInit } from '@angular/core';
// import { TaskStoreQuery } from '@query/task/task-store.query';
// import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';
import { pluck } from 'rxjs/operators';
import { TaskStoreQueryForRxAngular } from '../../../query/task/task-store.query';
import { LoadTaskUsecaseForRxAngular } from '../../../usecase/task/load-task.usecase';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  readonly task$ = this.taskStateQuery.select('task');

  constructor(
    // private taskStateQuery: TaskStoreQuery,
    // private loadTaskUsecase: LoadTaskUsecase
    private taskStateQuery: TaskStoreQueryForRxAngular,
    private loadTaskUsecase: LoadTaskUsecaseForRxAngular
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(2).subscribe();
  }
}
