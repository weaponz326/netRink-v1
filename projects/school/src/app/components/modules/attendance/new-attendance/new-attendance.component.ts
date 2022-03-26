import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { AttendanceApiService } from 'projects/school/src/app/services/modules/attendance-api/attendance-api.service';
import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';

import { Attendance } from 'projects/school/src/app/models/modules/attendance/attendance.model';


@Component({
  selector: 'app-new-attendance',
  templateUrl: './new-attendance.component.html',
  styleUrls: ['./new-attendance.component.scss']
})
export class NewAttendanceComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private attendanceApi: AttendanceApiService,
    private classesApi: ClassesApiService,
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  attendanceForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData: any;
  selectedClassId = "";
  selectedClassData: any;

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

    let activeTerm = this.activeTerm.getActiveTerm()

    this.attendanceForm.controls.term.setValue(activeTerm.data.term_name);
    this.selectedTermId = activeTerm.id;
    this.selectedTermData = activeTerm.data;
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
        data: {
          term_code: this.selectedTermData.term_code,
          term_name: this.selectedTermData.term_name,
        }
      },
      source: {
        id: this.selectedClassId,
        data: {
          class_name: this.selectedClassData.class_code,
          class_code: this.selectedClassData.class_name,
        }
      }
    }

    this.isAttendanceSaving = true;

    this.attendanceApi.createAttendance(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_attendance_id', res.id);
          sessionStorage.setItem('school_class_id', this.selectedClassId);
          this.getClassClassStudent();
        },
        (err: any) => {
          console.log(err);
          this.isAttendanceSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  getClassClassStudent(){
    this.classesApi.getClassClassStudent()
      .then(
        (res: any) => {
          console.log(res);
          this.setAttendanceSheet(res.docs);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setAttendanceSheet(classStudents: any){
    let classSheet: any = [];

    let sheetDateRange: any = [];
    var fromDate = this.attendanceForm.controls.fromDate.value
    var toDate = this.attendanceForm.controls.fromDate.value

    while(fromDate != toDate) {
      fromDate.add(1, 'days');
      var checks = {
        date: fromDate.toDate(),
        check: ""
      }

      sheetDateRange.push(fromDate.toDate());
    }
    console.log(sheetDateRange);

    classStudents.forEach((student: any) => {
      let sheetRow = {
        student: {
          id: student.id,
          data: {
            student_code: student.data().student_code,
            first_name: student.data().first_name,
            last_name: student.data().last_name,
          }
        },
        checks: checks
      };

      classSheet.push(sheetRow);
    });

    console.log(classSheet);
    this.createAttendanceSheet(classSheet);
  }

  createAttendanceSheet(classSheet: any){
    this.attendanceApi.createAttendanceSheet(classSheet)
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/attendance/view-attendance');
          this.dismissButton.nativeElement.click();
          this.isAttendanceSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isAttendanceSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.attendanceForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openClassWindow(){
    console.log("You are opening select term window")
    this.selectClass.openModal();
  }

  onClassSelected(classData: any){
    console.log(classData);

    this.attendanceForm.controls.source.setValue(classData.data().class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }

}
