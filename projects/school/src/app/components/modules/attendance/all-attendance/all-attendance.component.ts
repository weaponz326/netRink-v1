import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { NewAttendanceComponent } from '../new-attendance/new-attendance.component'

import { AttendanceApiService } from 'projects/school/src/app/services/modules/attendance-api/attendance-api.service';
// import { AttendancePrintService } from 'projects/school/src/app/services/printing/attendance-print/attendance-print.service';


@Component({
  selector: 'app-all-attendance',
  templateUrl: './all-attendance.component.html',
  styleUrls: ['./all-attendance.component.scss']
})
export class AllAttendanceComponent implements OnInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
    // private attendancePrint: AttendancePrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newAttendanceComponentReference', { read: NewAttendanceComponent, static: false }) newAttendance!: NewAttendanceComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/home/attendance/all-attendance" },
  ];

  attendanceGridData: any[] = [];

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
    this.getAccountAttendance();
  }

  getAccountAttendance(){
    this.isFetchingGridData = true;

    this.attendanceApi.getAccountAttendance(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.attendanceGridData = res.docs;

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

    this.attendanceApi.getAccountAttendanceNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.attendanceGridData = res.docs;

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

    this.attendanceApi.getAccountAttendancePrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.attendanceGridData = res.docs;

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

    this.getAccountAttendance();
  }

  viewAttendance(attendanceId: any){
    console.log(attendanceId);

    sessionStorage.setItem('school_attendance_id', attendanceId);
    this.router.navigateByUrl('/home/attendance/view-attendance');
  }

  onPrint(){
    console.log("lets start printing...");
    // this.attendancePrint.printAllAttendance();
  }

}
