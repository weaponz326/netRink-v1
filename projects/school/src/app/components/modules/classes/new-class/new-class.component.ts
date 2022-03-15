import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectDepartmentComponent } from '../../../select-windows/classes-windows/select-department/select-department.component';
import { SelectTeacherComponent } from '../../../select-windows/teachers-windows/select-teacher/select-teacher.component';

import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';

import { Clase } from 'projects/school/src/app/models/modules/classes/classes.model';


@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit {

  constructor(
    private router: Router,
    private classesApi: ClassesApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectDepartmentComponentReference', { read: SelectDepartmentComponent, static: false }) selectDepartment!: SelectDepartmentComponent;
  @ViewChild('selectTeacherComponentReference', { read: SelectTeacherComponent, static: false }) selectTeacher!: SelectTeacherComponent;

  classForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedDepartmentId = "";
  selectedDepartmentData = {};
  selectedTeacherId = "";
  selectedTeacherData = {};

  isClassSaving = false;

  ngOnInit(): void {
    this.initClassForm();
  }

  initClassForm(){
    this.classForm = new FormGroup({
      classCode: new FormControl(''),
      className: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      department: new FormControl({value: "", disabled: true}),
      classTeacher: new FormControl({value: "", disabled: true}),
      location: new FormControl(''),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  createClass(){
    let data: Clase = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      class_code: this.classForm.controls.classCode.value,
      class_name: this.classForm.controls.className.value,
      location: this.classForm.controls.location.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
      department: {
        id: this.selectedDepartmentId,
        data: this.selectedDepartmentData,
      },
      class_teacher: {
        id: this.selectedTeacherId,
        data: this.selectedTeacherData,
      }
    }

    this.isClassSaving = true;

    this.classesApi.createClass(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_class_id', res.id);
          this.router.navigateByUrl('/home/classes/view-class');

          this.dismissButton.nativeElement.click();
          this.isClassSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isClassSaving = true;
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

    this.classForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openDepartmentWindow(){
    console.log("You are opening select term window")
    this.selectDepartment.openModal();
  }

  onDepartmentSelected(departmentData: any){
    console.log(departmentData);

    this.classForm.controls.department.setValue(departmentData.data().clase.department_name);
    this.selectedDepartmentId = departmentData.id;
    this.selectedDepartmentData = departmentData.data();
  }

  openTeacherWindow(){
    console.log("You are opening select term window")
    this.selectTeacher.openModal();
  }

  onTeacherSelected(teacherData: any){
    console.log(teacherData);

    this.classForm.controls.teacher.setValue(teacherData.data().class_teacher.teacher_name);
    this.selectedTeacherId = teacherData.id;
    this.selectedTeacherData = teacherData.data();
  }

}
