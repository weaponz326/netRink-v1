import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
// import { SelectSubjectComponent } from '../../../select-windows/subjects-windows/select-subject/select-subject.component';

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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  // @ViewChild('selectSubjectComponentReference', { read: SelectSubjectComponent, static: false }) selectSubject!: SelectSubjectComponent;

  assessmentForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedSubjectId = "";
  selectedSubjectData = {};

  isAssessmentSaving = false;

  ngOnInit(): void {
    this.initAssessmentForm();
  }

  initAssessmentForm(){
    this.assessmentForm = new FormGroup({
      assessmentCode: new FormControl(''),
      assessmentDate: new FormControl(''),
      assessmentName: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      subject: new FormControl({value: "", disabled: true}),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();
    this.assessmentForm.controls.assessmentDate.setValue(new Date().toISOString().slice(0, 10))
  }

  createAssessment(){
    let data: Assessment = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      assessment_code: this.assessmentForm.controls.assessmentCode.value,
      assessment_name: this.assessmentForm.controls.assessmentName.value,
      assessment_date: this.assessmentForm.controls.assessmentDate.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
      subject: {
        id: this.selectedSubjectId,
        data: this.selectedSubjectData,
      }
    }

    this.isAssessmentSaving = true;

    this.assessmentApi.createAssessment(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_assessment_id', res.id);
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

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.assessmentForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openSubjectWindow(){
    console.log("You are opening select term window")
    // this.selectSubject.openModal();
  }

  onSubjectSelected(subjectData: any){
    console.log(subjectData);

    this.assessmentForm.controls.subject.setValue(subjectData.data().subject_name);
    this.selectedSubjectId = subjectData.id;
    this.selectedSubjectData = subjectData.data();
  }

}
