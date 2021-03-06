import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { AssessmentFormComponent } from '../assessment-form/assessment-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';

import { Assessment } from 'projects/school/src/app/models/modules/assessment/assessment.model';


@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('assessmentFormComponentReference', { read: AssessmentFormComponent, static: false }) assessmentForm!: AssessmentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Assessment", url: "/home/assessment/new-assessment" },
  ];

  isAssessmentSaving = false;

  ngOnInit(): void {
  }

  createAssessment(){
    let data: Assessment = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      assessment_code: this.assessmentForm.assessmentForm.controls.assessmentCode.value,
      assessment_name: this.assessmentForm.assessmentForm.controls.assessmentName.value,
      assessment_date: this.assessmentForm.assessmentForm.controls.assessmentDate.value,
      term: {
        id: this.assessmentForm.selectedTermId,
        data: {
          term_code: this.assessmentForm.selectedTermData.term_code,
          term_name: this.assessmentForm.selectedTermData.term_name,
        }
      },
      subject: {
        id: this.assessmentForm.selectedSubjectId,
        data: {
          subject_code: this.assessmentForm.selectedSubjectData.subject_code,
          subject_name: this.assessmentForm.selectedSubjectData.subject_name,
        }
      }
    }

    this.isAssessmentSaving = true;

    this.assessmentApi.createAssessment(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_assessment_id', res.id);
          this.createAssessmentSheet();

          this.router.navigateByUrl('/home/assessment/view-assessment');
          this.dismissButton.nativeElement.click();
          this.isAssessmentSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isAssessmentSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  createAssessmentSheet(){
    let data = { sheet: [] };
    this.assessmentApi.createAssessmentSheet(data)
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

}
