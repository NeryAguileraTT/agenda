import { Component } from '@angular/core';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";
import { displayDate, sampleData } from '../../../events-utc';



@Component({
  selector: 'app-kendoui',
  standalone: true,
  imports: [SchedulerModule],
  templateUrl: './kendoui.component.html',
  
})
export class KendouiComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
