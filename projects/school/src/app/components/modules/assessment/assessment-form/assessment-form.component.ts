import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectSubjectComponent } from '../../../select-windows/subjects-windows/select-subject/select-subject.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';


@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  constructor(private activeTerm: ActiveTermService) { }

  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectSubjectComponentReference', { read: SelectSubjectComponent, static: false }) selectSubject!: SelectSubjectComponent;

  assessmentForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData: any = {};
  selectedSubjectId = "";
  selectedSubjectData: any = { subject_code: "", subject_name: "" };

  ngOnInit(): void {
    this.initAssessmentForm();
  }

  ngAfterViewInit(){
    this.assessmentForm.controls.assessmentDate.setValue(new Date().toISOString().slice(0, 10));

    let activeTerm = this.activeTerm.getActiveTerm();
    this.assessmentForm.controls.term.setValue(activeTerm.data.term_name);
    this.selectedTermId = activeTerm.id;
    this.selectedTermData = activeTerm.data;
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
