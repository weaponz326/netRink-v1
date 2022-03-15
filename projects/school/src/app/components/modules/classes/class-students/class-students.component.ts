import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { SelectStudentComponent } from '../../../select-windows/students-windows/select-student/select-student.component';

import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';

import { ClassStudent } from 'projects/school/src/app/models/modules/classes/classes.model';


@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.scss']
})
export class ClassStudentsComponent implements OnInit {

  constructor(
    private router: Router,
    private classesApi: ClassesApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectStudentComponentReference', { read: SelectStudentComponent, static: false }) selectStudent!: SelectStudentComponent;

  classStudentsGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isStudentDeleting = false;

  ngOnInit(): void {
    this.getClassClassStudent();
  }

  getClassClassStudent(){
    this.isFetchingGridData = true;

    this.classesApi.getClassClassStudent()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.classStudentsGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createClassStudent(studentData: any){
    let data: ClassStudent = {
      created_at: serverTimestamp(),
      clase: sessionStorage.getItem('school_class_id') as string,
      student: {
        id: studentData.id,
        data: {

        }
      }
    }

    this.classesApi.createClassStudent(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getClassClassStudent();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteClassStudent(){
    this.isStudentDeleting = true;

    this.classesApi.deleteClassStudent()
      .then(
        (res: any) => {
          console.log(res);
          this.isStudentDeleting = false;
          this.getClassClassStudent();
        },
        (err: any) => {
          console.log(err);
          this.isStudentDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  gotoStudent(id: any){
    sessionStorage.setItem('school_student_id', id);
    this.router.navigateByUrl('/home/students/view-student');
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}
