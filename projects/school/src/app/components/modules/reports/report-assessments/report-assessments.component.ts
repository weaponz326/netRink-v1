import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
// import { SelectClassComponent } from '../../../select-windows/assessments-windows/select-class/select-class.component';

import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';

import { ReportAssessment } from 'projects/school/src/app/models/modules/reports/reports.model';


@Component({
  selector: 'app-report-assessments',
  templateUrl: './report-assessments.component.html',
  styleUrls: ['./report-assessments.component.scss']
})
export class ReportAssessmentsComponent implements OnInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  // @ViewChild('selectStudentComponentReference', { read: SelectStudentComponent, static: false }) selectStudent!: SelectStudentComponent;

  reportAssessmentsGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isAssessmentDeleting = false;

  ngOnInit(): void {
    this.getReportReportAssessment();
  }

  getReportReportAssessment(){
    this.isFetchingGridData = true;

    this.reportsApi.getReportReportAssessment()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.reportAssessmentsGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createReportAssessment(assessmentData: any){
    let data: ReportAssessment = {
      report: sessionStorage.getItem('school_report_id') as string,
      assessment: {
        id: assessmentData.id,
        data: {

        }
      }
    }

    this.reportsApi.createReportAssessment(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getReportReportAssessment();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteReportAssessment(id: any){
    this.isAssessmentDeleting = true;

    this.reportsApi.deleteReportAssessment()
      .then(
        (res: any) => {
          console.log(res);
          this.isAssessmentDeleting = false;
          this.getReportReportAssessment();
        },
        (err: any) => {
          console.log(err);
          this.isAssessmentDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }


}
