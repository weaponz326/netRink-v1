import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { Calendar, Schedule } from 'projects/personal/src/app/models/modules/calendar/calendar.model';


@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "View Calendar", url: "/home/calendar/view-calendar" },
  ];

  calendarForm: FormGroup = new FormGroup({});
  schedulesGridData: Schedule[] = [];
  calendarFormData: any;

  isCalendarLoading: boolean = false;
  isCalendarSaving: boolean = false;

  ngOnInit(): void {
    this.initClendarForm();

    this.getCalendar();
    this.getCalendarSchedule();
  }

  initClendarForm(){
    this.calendarForm = new FormGroup({
      calendarName: new FormControl('')
    })
  }

  getCalendar(){
    this.isCalendarLoading = true;

    this.calendarApi.getCalendar()
      .then(
        (res: any) => {
          console.log(res);
          this.calendarFormData = res;
          this.calendarForm.controls.calendarName.setValue(this.calendarFormData.data().calendar_name);
          this.isCalendarLoading = false;
        },
        (err: any) => {
          this.connectionToast.openToast();
          this.isCalendarLoading = false;
          console.log(err);
        }
      )
  }

  updateCalendar(){
    let data = {
      calendar_name: this.calendarForm.controls.calendarName.value,
    }

    console.log(data);
    this.isCalendarSaving = true;

    this.calendarApi.updateCalendar(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isCalendarSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isCalendarSaving = false;
        }
      )
  }

  getCalendarSchedule(){
    this.calendarApi.getCalendarSchedule()
      .then(
        (res: any) => {
          console.log(res);
          this.schedulesGridData = res;
        },
        (err: any) => {
          this.connectionToast.openToast();
          console.log(err);
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
