import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('@view/page/project-page/project-page.module').then(
        (m) => m.ProjectPageModule
      ),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('@view/page/schedule-page/schedule-page.module').then(
        (m) => m.SchedulePageModule
      ),
  },
  {
    path: 'mypage',
    loadChildren: () =>
      import('@view/page/my-tasks-page/my-tasks-page.module').then(
        (m) => m.MyTasksPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '/project',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
