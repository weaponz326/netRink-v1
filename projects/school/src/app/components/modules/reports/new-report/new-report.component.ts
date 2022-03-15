import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';

import { Report } from 'projects/school/src/app/models/modules/reports/reports.model';


@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  reportForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedClassId = "";
  selectedClassData = {};

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
        data: this.selectedTermData,
      },
      clase: {
        id: this.selectedClassId,
        data: this.selectedClassData,
      }
    }

    this.isReportSaving = true;

    this.reportsApi.createReport(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_report_id', res.id);
          this.router.navigateByUrl('/home/reports/class-report');
          this.dismissButton.nativeElement.click();
          this.isReportSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isReportSaving = true;
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
