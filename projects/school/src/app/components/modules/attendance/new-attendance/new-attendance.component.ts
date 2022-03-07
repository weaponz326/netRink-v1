import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
// import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { AttendanceApiService } from 'projects/school/src/app/services/modules/attendance-api/attendance-api.service';

import { Attendance } from 'projects/school/src/app/models/modules/attendance/attendance.model';


@Component({
  selector: 'app-new-attendance',
  templateUrl: './new-attendance.component.html',
  styleUrls: ['./new-attendance.component.scss']
})
export class NewAttendanceComponent implements OnInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  // @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  attendanceForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedClassId = "";
  selectedClassData = {};

  isAttendanceSaving = false;

  ngOnInit(): void {
    this.initAttendanceForm();
  }

  initAttendanceForm(){
    this.attendanceForm = new FormGroup({
      attendanceCode: new FormControl(''),
      attendanceName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      source: new FormControl({value: "", disabled: true}),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  createAttendance(){
    let data: Attendance = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      attendance_code: this.attendanceForm.controls.attendanceCode.value,
      attendance_name: this.attendanceForm.controls.attendanceName.value,
      from_date: this.attendanceForm.controls.fromDate.value,
      to_date: this.attendanceForm.controls.toDate.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
      source: {
        id: this.selectedClassId,
        data: this.selectedClassData,
      }
    }

    this.isAttendanceSaving = true;

    this.attendanceApi.createAttendance(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_attendance_id', res.id);
          this.router.navigateByUrl('/home/attendance/view-attendance');
          this.dismissButton.nativeElement.click();
          this.isAttendanceSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isAttendanceSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.attendanceForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openClassWindow(){
    console.log("You are opening select term window")
    // this.selectClass.openModal();
  }

  onClassSelected(classData: any){
    console.log(classData);

    this.attendanceForm.controls.class.setValue(classData.data().class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }

}
