import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';

import { AssessmentClass } from 'projects/school/src/app/models/modules/assessment/assessment.model';


@Component({
  selector: 'app-assessment-classes',
  templateUrl: './assessment-classes.component.html',
  styleUrls: ['./assessment-classes.component.scss']
})
export class AssessmentClassesComponent implements OnInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  assessmentClassesGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isClassDeleting = false;

  ngOnInit(): void {
    this.getAssessmentAssessmentClass();
  }

  getAssessmentAssessmentClass(){
    this.isFetchingGridData = true;

    this.assessmentApi.getAssessmentAssessmentClass()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.assessmentClassesGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createAssessmentClass(classData: any){
    let data: AssessmentClass = {
      assessment: sessionStorage.getItem('school_assessment_id') as string,
      clase: {
        id: classData.id,
        data: {

        }
      }
    }

    this.assessmentApi.createAssessmentClass(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getAssessmentAssessmentClass();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteAssessmentClass(id: any){
    this.isClassDeleting = true;

    this.assessmentApi.deleteAssessmentClass()
      .then(
        (res: any) => {
          console.log(res);
          this.isClassDeleting = false;
          this.getAssessmentAssessmentClass();
        },
        (err: any) => {
          console.log(err);
          this.isClassDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}
