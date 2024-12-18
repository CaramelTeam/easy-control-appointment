import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

//#region ====== Imports primeng
import dayGridPlugin from '@fullcalendar/daygrid';
import { DialogModule } from 'primeng/dialog';
//#endregion
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [
    FullCalendarModule,
    DialogModule
  ]
})
export class CalendarComponent {
  title = 'fullCalendar';

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date(), end: new Date('2024-11-01T14:00:00')},
      {
        title: 'Meeting Litos',
        start: new Date('2024-11-10T10:00:00'), // Definimos una fecha y hora específica
      },
      {
        title: 'Meeting Litos',
        start: new Date('2024-11-01T10:00:00'), // Definimos una fecha y hora específica
        end: new Date('2024-11-01T12:00:00')     // Opcional: fecha de fin si el evento tiene duración
      }
    ]
  };

  viewAddItem: boolean = false;
  addEvent(){
   this.viewAddItem = true;
  }
}
