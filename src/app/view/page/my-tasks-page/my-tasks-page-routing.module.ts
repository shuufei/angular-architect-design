import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTasksPageComponent } from './my-tasks-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyTasksPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTasksPageRoutingModule {}
