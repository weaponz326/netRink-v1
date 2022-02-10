import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';

import { Schedule } from 'projects/personal/src/app/models/modules/calendar/calendar.model';


@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrls: ['./all-schedules.component.scss']
})
export class AllSchedulesComponent implements OnInit {

  constructor(
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Schedules", url: "/home/calendar/all-schedules" },
  ];

  schedulesGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAt: any = [];
  pageNumber = 1;
  disable_next: boolean = false;
  disable_prev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllUserSchedule(this.sortParams, 20, null);
  }

  getAllUserSchedule(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.calendarApi.getAllUserSchedule(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.schedulesGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAt = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
        },
        (err: any) => {
          this.connectionToast.openToast();
          this.isFetchingGridData = false;
          console.log(err);
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserSchedule(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserSchedule(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserSchedule(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.calendarPrint.getPrintSchedules(this.totalItems);
  }

}
