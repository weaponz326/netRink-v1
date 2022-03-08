import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component';
import { BdayInputComponent } from 'projects/personal/src/app/components/module-utilities/bday-input/bday-input.component'
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
// import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

  studentForm: FormGroup = new FormGroup({});

  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) photo!: ImageInputComponent;
  @ViewChild('bdayInputComponentReference', { read: BdayInputComponent, static: false }) bday!: BdayInputComponent;

  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  // @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  ngOnInit(): void {
    this.initParentForm();
  }

  selectedTermId = "";
  selectedTermData = {};
  selectedClassId = "";
  selectedClassData = {};

  initParentForm(){
    this.studentForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      sex: new FormControl(''),
      nationality: new FormControl(''),
      religion: new FormControl(''),
      studentCode: new FormControl(''),
      term: new FormControl(''),
      clase: new FormControl(''),
      admissionDate: new FormControl(''),
      previousSchool: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl(''),
    });
  }

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.studentForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openClassWindow(){
    console.log("You are opening select term window")
    // this.selectClass.openModal();
  }

  onClassSelected(classData: any){
    console.log(classData);

    this.studentForm.controls.class.setValue(classData.data().class_name);
    this.selectedClassId = classData.id;
    this.selectedClassData = classData.data();
  }


}
