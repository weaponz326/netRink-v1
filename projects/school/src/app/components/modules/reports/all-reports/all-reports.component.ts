import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { NewReportComponent } from '../new-report/new-report.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';
// import { ReportsPrintService } from 'projects/school/src/app/services/printing/reports-print/reports-print.service';


@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private reportsApi: ReportsApiService,
    // private reportPrint: ReportPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newReportComponentReference', { read: NewReportComponent, static: false }) newReport!: NewReportComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/home/reports/all-reports" },
  ];

  activeTermName: any;

  reportsGridData: any[] = [];

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
    this.getActiveTerm();
    this.getAccountReport();
  }

  getActiveTerm(){
    this.activeTermName = this.activeTerm.getActiveTerm().data.term_name;
  }

  getAccountReport(){
    this.isFetchingGridData = true;

    this.reportsApi.getAccountReport(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.reportsGridData = res.docs;

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

    this.reportsApi.getAccountReportNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.reportsGridData = res.docs;

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

    this.reportsApi.getAccountReportPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.reportsGridData = res.docs;

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

    this.getAccountReport();
  }

  viewReport(reportId: any){
    console.log(reportId);

    sessionStorage.setItem('school_report_id', reportId);
    this.router.navigateByUrl('/home/reports/class-report');
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.activeTerm.setActiveTerm(termData);
    this.getActiveTerm();
    this.getAccountReport();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.reportPrint.printAllReport();
  }

}
