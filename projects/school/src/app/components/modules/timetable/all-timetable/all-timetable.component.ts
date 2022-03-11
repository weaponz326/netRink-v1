import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { NewTimetableComponent } from '../new-timetable/new-timetable.component'

import { TimetableApiService } from 'projects/school/src/app/services/modules/timetable-api/timetable-api.service';
// import { TimetablePrintService } from 'projects/school/src/app/services/printing/timetable-print/timetable-print.service';


@Component({
  selector: 'app-all-timetable',
  templateUrl: './all-timetable.component.html',
  styleUrls: ['./all-timetable.component.scss']
})
export class AllTimetableComponent implements OnInit {

  constructor(
    private router: Router,
    private timetableApi: TimetableApiService,
    // private timetablePrint: TimetablePrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newTimetableComponentReference', { read: NewTimetableComponent, static: false }) newTimetable!: NewTimetableComponent;

  navHeading: any[] = [
    { text: "All Timetable", url: "/home/timetable/all-timetable" },
  ];

  timetableGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
    this.getAccountTimetable();
  }

  getAccountTimetable(){
    this.isFetchingGridData = true;

    this.timetableApi.getAccountTimetable(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.timetableGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          if (!res.docs.length) this.isDataAvailable = false;
          else this.isDataAvailable = true;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.timetableApi.getAccountTimetableNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.timetableGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.timetableApi.getAccountTimetablePrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.timetableGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountTimetable();
  }

  viewTimetable(timetableId: any){
    console.log(timetableId);

    sessionStorage.setItem('school_timetable_id', timetableId);
    this.router.navigateByUrl('/home/timetable/view-timetable');
  }

  onPrint(){
    console.log("lets start printing...");
    // this.timetablePrint.printAllTimetable();
  }

}
