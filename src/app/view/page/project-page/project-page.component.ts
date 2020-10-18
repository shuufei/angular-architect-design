import { Component, OnInit } from '@angular/core';
import { TaskRepositoryQuery } from '@query/task/task-repository.query';
import { LoadTaskUsecase } from '@usecase/task/load-task.usecase';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  readonly task$ = this.taskStateQuery.task$;

  constructor(
    private taskStateQuery: TaskRepositoryQuery,
    private loadTaskUsecase: LoadTaskUsecase
  ) {}

  ngOnInit(): void {
    this.loadTaskUsecase.execute(2).subscribe();
  }
}
