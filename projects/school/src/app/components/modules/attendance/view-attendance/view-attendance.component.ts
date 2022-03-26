import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { AttendanceApiService } from 'projects/school/src/app/services/modules/attendance-api/attendance-api.service';
// import { AttendancePrintService } from 'projects/school/src/app/services/printing/attendance-print/attendance-print.service';

import { Attendance } from 'projects/school/src/app/models/modules/attendance/attendance.model';


@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
    // private attendancePrint: AttendancePrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/home/attendance/all-attendance" },
    { text: "View Attendance", url: "/home/attendance/view-attendance" },
  ];

  attendanceForm: FormGroup = new FormGroup({});
  attendanceFormData: any;

  selectedTermId = "";
  selectedTermData = {};
  selectedClassId = "";
  selectedClassData = {};

  isAttendanceLoading = false;
  isAttendanceSaving = false;
  isAttendanceDeleting = false;

  ngOnInit(): void {
    this.initAttendanceForm();
    this.getAttendance();
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

  getAttendance(){
    this.isAttendanceLoading = true;

    this.attendanceApi.getAttendance()
      .then(
        (res: any) => {
          console.log(res);
          this.attendanceFormData = res;
          this.isAttendanceLoading = false;

          this.attendanceForm.controls.attendanceCode.setValue(this.attendanceFormData.data().attendance_code);
          this.attendanceForm.controls.attendanceName.setValue(this.attendanceFormData.data().attendance_name);
          this.attendanceForm.controls.fromDate.setValue(this.attendanceFormData.data().from_date);
          this.attendanceForm.controls.toDate.setValue(this.attendanceFormData.data().to_date);

          this.selectedTermId = this.attendanceFormData.data().term.id;
          this.selectedTermData = this.attendanceFormData.data().term.data;
          this.attendanceForm.controls.term.setValue(this.attendanceFormData.data().term.data.term_name);
          this.selectedClassId = this.attendanceFormData.data().source.id;
          this.selectedClassData = this.attendanceFormData.data().source.data;
          this.attendanceForm.controls.source.setValue(this.attendanceFormData.data().source.data.class_name);
        },
        (err: any) => {
          console.log(err);
          this.isAttendanceLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateAttendance(){
    let data = {
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

    console.log(data);
    this.isAttendanceSaving = true;

    this.attendanceApi.updateAttendance(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isAttendanceSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isAttendanceSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteAttendance(){
    this.isAttendanceDeleting = true;

    this.attendanceApi.deleteAttendance()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/attendance/all-attendance');
        },
        (err: any) => {
          console.log(err);
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

    this.attendanceForm.controls.class.setValue(classData.data().class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.attendancePrint.printViewAttendance();
  }

}
