import { Component } from '@angular/core';
import { MonthAgendaService, ScheduleModule, TimelineMonthService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-sync',
  standalone: true,
  imports: [ScheduleModule],
  templateUrl: './sync.component.html',
  styleUrl: './sync.component.scss',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class SyncComponent {
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
  }];
  public eventSettings: any = {
    dataSource: this.data
  }
}
