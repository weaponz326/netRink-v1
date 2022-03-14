import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { AssessmentTableComponent } from '../assessment-table/assessment-table.component';
import { AssessmentClassesComponent } from '../assessment-classes/assessment-classes.component';
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectSubjectComponent } from '../../../select-windows/subjects-windows/select-subject/select-subject.component';

import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';
// import { AssessmentPrintService } from 'projects/school/src/app/services/printing/assessment-print/assessment-print.service';

import { Assessment } from 'projects/school/src/app/models/modules/assessment/assessment.model';


@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.scss']
})
export class ViewAssessmentComponent implements OnInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService,
    // private assessmentPrint: AssessmentPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('assessmentTableComponentReference', { read: AssessmentTableComponent, static: false }) assessmentTable!: AssessmentTableComponent;
  @ViewChild('assessmentClassesComponentReference', { read: AssessmentClassesComponent, static: false }) assessmentClasses!: AssessmentClassesComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectSubjectComponentReference', { read: SelectSubjectComponent, static: false }) selectSubject!: SelectSubjectComponent;

  navHeading: any[] = [
    { text: "All Assessment", url: "/home/assessment/all-assessment" },
    { text: "View Assessment", url: "/home/assessment/view-assessment" },
  ];

  assessmentForm: FormGroup = new FormGroup({});
  assessmentFormData: any;

  selectedTermId = "";
  selectedTermData = {};
  selectedSubjectId = "";
  selectedSubjectData = {};

  isAssessmentLoading = false;
  isAssessmentSaving = false;
  isAssessmentDeleting = false;

  ngOnInit(): void {
    this.initAssessmentForm();
    this.getAssessment();
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

  getAssessment(){
    this.isAssessmentLoading = true;

    this.assessmentApi.getAssessment()
      .then(
        (res: any) => {
          console.log(res);
          this.assessmentFormData = res;
          this.isAssessmentLoading = false;

          this.assessmentForm.controls.assessmentCode.setValue(this.assessmentFormData.data().assessment_code);
          this.assessmentForm.controls.assessmentName.setValue(this.assessmentFormData.data().assessment_name);
          this.assessmentForm.controls.assessmentDate.setValue(this.assessmentFormData.data().assessment_date);

          this.selectedTermId = this.assessmentFormData.data().term.id;
          this.selectedTermData = this.assessmentFormData.data().term.data;
          this.assessmentForm.controls.term.setValue(this.assessmentFormData.data().term.term_name);
          this.selectedSubjectId = this.assessmentFormData.data().subject.id;
          this.selectedSubjectData = this.assessmentFormData.data().subject.data;
          this.assessmentForm.controls.subject.setValue(this.assessmentFormData.data().subject.subject_name);
        },
        (err: any) => {
          console.log(err);
          this.isAssessmentLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateAssessment(){
    let data = {
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

    console.log(data);
    this.isAssessmentSaving = true;

    this.assessmentApi.updateAssessment(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isAssessmentSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isAssessmentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteAssessment(){
    this.isAssessmentDeleting = true;

    this.assessmentApi.deleteAssessment()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/assessment/all-assessment');
        },
        (err: any) => {
          console.log(err);
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

  onPrint(){
    console.log("lets start printing...");
    // this.assessmentPrint.printViewAssessment();
  }

}
