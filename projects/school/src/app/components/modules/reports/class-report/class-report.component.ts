import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ReportAssessmentsComponent } from '../report-assessments/report-assessments.component';
import { ClassSheetComponent } from '../class-sheet/class-sheet.component';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
// import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';
// import { ReportsPrintService } from 'projects/school/src/app/services/printing/reports-print/reports-print.service';

import { Report } from 'projects/school/src/app/models/modules/reports/reports.model';


@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.scss']
})
export class ClassReportComponent implements OnInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
    // private reportPrint: ReportPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  // @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;
  @ViewChild('reportAssessmentsComponentReference', { read: ReportAssessmentsComponent, static: false }) reportAssessments!: ReportAssessmentsComponent;
  @ViewChild('classSheetComponentReference', { read: ClassSheetComponent, static: false }) classSheet!: ClassSheetComponent;

  navHeading: any[] = [
    { text: "All Report", url: "/home/report/all-report" },
    { text: "View Report", url: "/home/report/view-report" },
  ];

  reportForm: FormGroup = new FormGroup({});
  reportFormData: any;

  selectedTermId = "";
  selectedTermData = {};
  selectedClassId = "";
  selectedClassData = {};

  isReportLoading = false;
  isReportSaving = false;
  isReportDeleting = false;

  ngOnInit(): void {
    this.initReportForm();
    this.getReport();
  }

  initReportForm(){
    this.reportForm = new FormGroup({
      reportCode: new FormControl(''),
      reportName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      clase: new FormControl({value: "", disabled: true}),
    })
  }

  getReport(){
    this.isReportLoading = true;

    this.reportsApi.getReport()
      .then(
        (res: any) => {
          console.log(res);
          this.reportFormData = res;
          this.isReportLoading = false;

          this.reportForm.controls.reportCode.setValue(this.reportFormData.data().report_code);
          this.reportForm.controls.reportName.setValue(this.reportFormData.data().report_name);
          this.reportForm.controls.reportDate.setValue(this.reportFormData.data().report_date);

          this.selectedTermId = this.reportFormData.data().term.id;
          this.selectedTermData = this.reportFormData.data().term.data;
          this.reportForm.controls.termName.setValue(this.reportFormData.data().term.term_name);
          this.selectedClassId = this.reportFormData.data().source.id;
          this.selectedClassData = this.reportFormData.data().source.data;
          this.reportForm.controls.className.setValue(this.reportFormData.data().source.class_name);
        },
        (err: any) => {
          console.log(err);
          this.isReportLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateReport(){
    let data = {
      report_code: this.reportForm.controls.reportCode.value,
      report_name: this.reportForm.controls.reportName.value,
      report_date: this.reportForm.controls.reportDate.value,
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
    this.isReportSaving = true;

    this.reportsApi.updateReport(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isReportSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isReportSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteReport(){
    this.isReportDeleting = true;

    this.reportsApi.deleteReport()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/reports/all-reports');
        },
        (err: any) => {
          console.log(err);
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

    this.reportForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openClassWindow(){
    console.log("You are opening select term window")
    // this.selectClass.openModal();
  }

  onClassSelected(classData: any){
    console.log(classData);

    this.reportForm.controls.clase.setValue(classData.data().clase.class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.reportPrint.printViewReport();
  }

}
