import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectSubjectComponent } from '../../../select-windows/subjects-windows/select-subject/select-subject.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
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
    private activeTerm: ActiveTermService,
    private assessmentApi: AssessmentApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectSubjectComponentReference', { read: SelectSubjectComponent, static: false }) selectSubject!: SelectSubjectComponent;

  assessmentForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData: any;
  selectedSubjectId = "";
  selectedSubjectData: any;

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

    this.assessmentForm.controls.assessmentDate.setValue(new Date().toISOString().slice(0, 10));

    let activeTerm = this.activeTerm.getActiveTerm();
    this.assessmentForm.controls.term.setValue(activeTerm.data.term_name);
    this.selectedTermId = activeTerm.id;
    this.selectedTermData = activeTerm.data;
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
        data: {
          term_code: this.selectedTermData.term_code,
          term_name: this.selectedTermData.term_name,
        }
      },
      subject: {
        id: this.selectedSubjectId,
        data: {
          subject_code: this.selectedSubjectData.subject_code,
          subject_name: this.selectedSubjectData.subject_name,
        }
      }
    }

    this.isAssessmentSaving = true;

    this.assessmentApi.createAssessment(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_assessment_id', res.id);
          this.createAssessmentSheet(res.id);

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

  createAssessmentSheet(assessmentId: any){
    this.assessmentApi.createAssessmentSheet(assessmentId)
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

  openTermWindow(){
    console.log("You are opening select term window");
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.assessmentForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openSubjectWindow(){
    console.log("You are opening select term window")
    this.selectSubject.openModal();
  }

  onSubjectSelected(subjectData: any){
    console.log(subjectData);

    this.assessmentForm.controls.subject.setValue(subjectData.data().subject_name);
    this.selectedSubjectId = subjectData.id;
    this.selectedSubjectData = subjectData.data();
  }

}
