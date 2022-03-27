import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { arrayUnion } from 'firebase/firestore';

import { ClassStudentsComponent } from '../class-students/class-students.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
import { SelectDepartmentComponent } from '../../../select-windows/classes-windows/select-department/select-department.component';
import { SelectTeacherComponent } from '../../../select-windows/teachers-windows/select-teacher/select-teacher.component';

import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';
// import { ClassesPrintService } from 'projects/school/src/app/services/printing/classes-print/classes-print.service';

import { Clase } from 'projects/school/src/app/models/modules/classes/classes.model';


@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit {

  constructor(
    private router: Router,
    private classesApi: ClassesApiService,
    // private classesPrint: ClassesPrintService,
  ) { }

  @ViewChild('classStudentsComponentReference', { read: ClassStudentsComponent, static: false }) classStudents!: ClassStudentsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  @ViewChild('selectDepartmentComponentReference', { read: SelectDepartmentComponent, static: false }) selectDepartment!: SelectDepartmentComponent;
  @ViewChild('selectTeacherComponentReference', { read: SelectTeacherComponent, static: false }) selectTeacher!: SelectTeacherComponent;

  navHeading: any[] = [
    { text: "All Classes", url: "/home/classes/all-classes" },
    { text: "View Class", url: "/home/classes/view-class" },
  ];

  classForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData: any = {};
  selectedDepartmentId = "";
  selectedDepartmentData: any = {};
  selectedTeacherId = "";
  selectedTeacherData: any = {};

  classData: any;

  isClassLoading = false;
  isClassSaving = false;
  isClassDeleting = false;

  ngOnInit(): void {
    this.initClassForm();
    this.getClass();
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

  getClass(){
    this.isClassLoading = true;

    this.classesApi.getClass()
      .then(
        (res: any) => {
          console.log(res);
          this.classData = res;
          this.isClassLoading = false;

          this.classForm.controls.classCode.setValue(this.classData.data().class_code);
          this.classForm.controls.className.setValue(this.classData.data().class_name);
          this.classForm.controls.term.setValue(this.classData.data().term.data.term_name);
          this.classForm.controls.department.setValue(this.classData.data().department.data.department_name);
          this.classForm.controls.classTeacher.setValue(this.classData.data().class_teacher.data.teacher_name);
          this.classForm.controls.location.setValue(this.classData.data().location);

          this.selectedTermId = this.classData.data().term.id;
          this.selectedTermData = this.classData.data().term.data;
          this.selectedTeacherId = this.classData.data().class_teacher.id;
          this.selectedTeacherData = this.classData.data().class_teacher.data;
          this.selectedDepartmentId = this.classData.data().department.id;
          this.selectedDepartmentData = this.classData.data().department.data;
        },
        (err: any) => {
          console.log(err);
          this.isClassLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateClass(){
    console.log('u are saving a new class');

    var data = {
      class_code: this.classForm.controls.classCode.value,
      class_name: this.classForm.controls.className.value,
      location: this.classForm.controls.toDate.value,
      department: {
        id: this.selectedDepartmentId,
        data: {
          department_code: this.selectedDepartmentData.department_code,
          department_name: this.selectedDepartmentData.department_name,
        }
      },
      class_teacher: {
        id: this.selectedTeacherId,
        data: {
          teacher_code: this.selectedTeacherData.teacher_code,
          teacher_name: this.selectedTeacherData.teacher_name,
        }
      }
    }

    console.log(data);
    this.isClassSaving = true;

    this.classesApi.updateClass(data)
      .then(
        (res: any) => {
          console.log(res);
          this.updateTerm();
        },
        (err: any) => {
          console.log(err);
          this.isClassSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTerm(){
    console.log('u are adding new term to term');

    if (this.classData.data().terms.include({id: this.selectedTermId})){
      console.log('lets go ahead with term update');

      let data = {
        terms: {
          id: this.selectedTermId,
          data: arrayUnion(this.selectedTermData),
        }
      }

      this.classesApi.updateClass(data)
        .then(
          (res: any) => {
            console.log(res);
            this.isClassSaving = false;
          },
          (err: any) => {
            console.log(err);
            this.isClassSaving = false;
            this.connectionToast.openToast();
          }
        )
    }
    else{
      console.log('no need to update term');
      this.isClassSaving = false;
    }
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteClass(){
    this.isClassDeleting = true;

    this.classesApi.deleteClass()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/classes/all-classes');
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

    this.classForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  openDepartmentWindow(){
    console.log("You are opening select term window")
    this.selectDepartment.openModal();
  }

  onDepartmentSelected(departmentData: any){
    console.log(departmentData);

    this.classForm.controls.department.setValue(departmentData.data().department_name);
    this.selectedDepartmentId = departmentData.id;
    this.selectedDepartmentData = departmentData.data();
  }

  openTeacherWindow(){
    console.log("You are opening select term window")
    this.selectTeacher.openModal();
  }

  onTeacherSelected(teacherData: any){
    console.log(teacherData);

    this.classForm.controls.classTeacher.setValue(teacherData.data().first_name + " "+ teacherData.data().last_name);
    this.selectedTeacherId = teacherData.id;
    this.selectedTeacherData = teacherData.data();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.classesPrint.printViewClass();
  }

}
