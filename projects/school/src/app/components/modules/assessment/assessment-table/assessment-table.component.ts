import { Component, OnInit, ViewChild } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';

import { AssessmentSheet } from 'projects/school/src/app/models/modules/assessment/assessment.model';


@Component({
  selector: 'app-assessment-table',
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.scss']
})
export class AssessmentTableComponent implements OnInit {

  constructor(private assessmentApi: AssessmentApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  assessmentTableGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isTableDeleting = false;

  ngOnInit(): void {
    this.getAssessmentAssessmentSheet();
  }

  getAssessmentAssessmentSheet(){
    this.isFetchingGridData = true;

    this.assessmentApi.getAssessmentAssessmentSheet()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.assessmentTableGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createAssessmentSheet(tableData: any){
    // let data: AssessmentSheet = {
    //   assessment: sessionStorage.getItem('school_assessment_id') as string,
    // }

    let data = {}

    this.assessmentApi.createAssessmentSheet(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getAssessmentAssessmentSheet();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteAssessmentSheet(id: any){
    this.isTableDeleting = true;

    this.assessmentApi.deleteAssessmentSheet()
      .then(
        (res: any) => {
          console.log(res);
          this.isTableDeleting = false;
          this.getAssessmentAssessmentSheet();
        },
        (err: any) => {
          console.log(err);
          this.isTableDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}
