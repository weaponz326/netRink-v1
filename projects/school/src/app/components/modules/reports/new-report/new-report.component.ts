import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';
import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';

import { Report } from 'projects/school/src/app/models/modules/reports/reports.model';


@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private reportsApi: ReportsApiService,
    private classesApi: ClassesApiService,
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  reportForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData: any;
  selectedClassId = "";
  selectedClassData: any;

  isReportSaving = false;

  ngOnInit(): void {
    this.initReportForm();
  }

  initReportForm(){
    this.reportForm = new FormGroup({
      reportCode: new FormControl(''),
      reportName: new FormControl(''),
      reportDate: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      clase: new FormControl({value: "", disabled: true}),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();

    this.reportForm.controls.reportDate.setValue(new Date().toISOString().slice(0, 10));

    let activeTerm = this.activeTerm.getActiveTerm();
    this.reportForm.controls.term.setValue(activeTerm.data.term_name);
    this.selectedTermId = activeTerm.id;
    this.selectedTermData = activeTerm.data;
  }

  createReport(){
    let data: Report = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      report_code: this.reportForm.controls.reportCode.value,
      report_name: this.reportForm.controls.reportName.value,
      report_date: this.reportForm.controls.reportDate.value,
      term: {
        id: this.selectedTermId,
        data: {
          term_code: this.selectedTermData.term_code,
          term_name: this.selectedTermData.term_name,
        }
      },
      clase: {
        id: this.selectedClassId,
        data: {
          class_code: this.selectedClassData.class_code,
          class_name: this.selectedClassData.class_name,
        }
      }
    }

    this.isReportSaving = true;

    this.reportsApi.createReport(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_report_id', res.id);
          sessionStorage.setItem('school_class_id', this.selectedClassId);
          this.getClassClassStudent();
        },
        (err: any) => {
          console.log(err);
          this.isReportSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  getClassClassStudent(){
    this.classesApi.getClassClassStudent()
      .then(
        (res: any) => {
          console.log(res);
          this.setReportSheet(res.docs);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setReportSheet(classStudents: any){
    let classSheet: any = [];

    let sheetDateRange: any = [];
    var fromDate = this.reportForm.controls.fromDate.value
    var toDate = this.reportForm.controls.fromDate.value

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
    this.createReportSheet(classSheet);
  }

  createReportSheet(classSheet: any){
    this.reportsApi.createReportSheet(classSheet)
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/report/view-report');
          this.dismissButton.nativeElement.click();
          this.isReportSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isReportSaving = false;
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

    this.reportForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openClassWindow(){
    console.log("You are opening select term window")
    this.selectClass.openModal();
  }

  onClassSelected(classData: any){
    console.log(classData);

    this.reportForm.controls.class.setValue(classData.data().clase.class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }

}
