import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardComponent } from './component/presentation/task-card/task-card.component';
import { ProjectPageComponent } from './page/project-page/project-page.component';
import { SchedulePageComponent } from './page/schedule-page/schedule-page.component';

@NgModule({
  declarations: [AppComponent, TaskCardComponent, ProjectPageComponent, SchedulePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
