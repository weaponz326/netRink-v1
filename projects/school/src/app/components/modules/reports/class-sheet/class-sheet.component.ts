import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { ReportsApiService } from 'projects/school/src/app/services/modules/reports-api/reports-api.service';
import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';


@Component({
  selector: 'app-class-sheet',
  templateUrl: './class-sheet.component.html',
  styleUrls: ['./class-sheet.component.scss']
})
export class ClassSheetComponent implements OnInit {

  constructor(
    private reportsApi: ReportsApiService,
    private assessmentApi: AssessmentApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  ngOnInit(): void {
  }

  getAssessmentSheet(){
    this.assessmentApi.getAssessmentSheet()
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setReportAssessment(){

  }

}
