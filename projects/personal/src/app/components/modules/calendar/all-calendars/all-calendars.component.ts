import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewCalendarComponent } from '../new-calendar/new-calendar.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';

import { Calendar } from 'projects/personal/src/app/models/modules/calendar/calendar.model';


@Component({
  selector: 'app-all-calendars',
  templateUrl: './all-calendars.component.html',
  styleUrls: ['./all-calendars.component.scss']
})
export class AllCalendarsComponent implements OnInit {

  constructor(
    private router: Router,
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newCalendarComponentReference', { read: NewCalendarComponent, static: false }) newCalendar!: NewCalendarComponent;

  navHeading: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars" },
  ];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  // calendarGridData: Calendar[] = [];
  calendarGridData: any[] = [];

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
    this.getAllUserCalendar(this.sortParams, 20, null);
  }

  getAllUserCalendar(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;
    this.calendarApi.getAllUserCalendar(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.calendarGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAt = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isFetchingGridData = false;
        }
      )
  }

  viewCalendar(id: any){
    sessionStorage.setItem('personal_calendar_id', id);
    this.router.navigateByUrl('/home/calendar/view-calendar')
  }

  nextPage(e: any){
    e.preventDefault();

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserCalendar(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserCalendar(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserCalendar(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.calendarPrint.getPrintCalendars(this.totalItems);
  }

}
