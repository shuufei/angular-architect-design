import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from './page/project-page/project-page.component';
import { SchedulePageComponent } from './page/schedule-page/schedule-page.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectPageComponent,
  },
  {
    path: 'schedule',
    component: SchedulePageComponent,
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
