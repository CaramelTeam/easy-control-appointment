import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CalendarComponent } from './components/calendar/calendar.component';


import { FullCalendarModule } from '@fullcalendar/angular';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
