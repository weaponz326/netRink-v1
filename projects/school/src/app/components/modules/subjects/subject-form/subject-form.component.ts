import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectDepartmentComponent } from '../../../select-windows/classes-windows/select-department/select-department.component';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  constructor() { }

  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectDepartmentComponentReference', { read: SelectDepartmentComponent, static: false }) selectDepartment!: SelectDepartmentComponent;

  subjectForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedDepartmentId = "";
  selectedDepartmentData = {};

  ngOnInit(): void {
    this.initSubjectForm();
  }

  initSubjectForm(){
    this.subjectForm = new FormGroup({
      subjectCode: new FormControl(''),
      subjectName: new FormControl(''),
      term: new FormControl(''),
      department: new FormControl(''),
      description: new FormControl(''),
    });
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openDepartmentWindow(){
    console.log("You are opening select department window")
    this.selectDepartment.openModal();
  }

  onDepartmentSelected(departmentData: any){
    console.log(departmentData);

    this.selectedDepartmentId = departmentData.id;
    this.selectedDepartmentData = departmentData.data();
  }

}
