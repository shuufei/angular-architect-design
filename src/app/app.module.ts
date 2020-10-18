import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulePageModule } from './view/page/schedule-page/schedule-page.module';
import { ProjectPageModule } from './view/page/project-page/project-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchedulePageModule,
    ProjectPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
